library(ggplot2)
library(lme4)
library(hydroGOF)
library(dplyr)
library(lmerTest)

setwd("~/git/vietnamese_adjectives/experiments/1-ordering-preference-vietnamese/results")

df = read.csv("results.csv",header=T)
head(df)

d = subset(df, select=c("class1",
                        "class2",
                        "classifier",
                        "noun",
                        "nounclass",
                        "predicate1",
                        "predicate1English",
                        "predicate2",
                        "predicate2English",
                        "response",
                        "slide_number",
                        "language",
                        "enjoyment",
                        "assess",
                        "age",
                        "gender",
                        "education",
                        "comments",
                        "describe",
                        "school",
                        "college",
                        "lived",
                        "years",
                        "family",
                        "level",
                        "time_in_minutes",
                        "participant_id"
))

d$workerid = d$participant_id
                        
unique(d$language)

all <- d
# only native Vietnamese speakers (n=1)
d = d[d$language!="greg"&
        d$language!=""&
        d$language!="Japanese"&
        d$language!="Việt Nam"
        ,]
d = d[d$describe=="VietViet",]
d = d[d$lived=="both8"&d$years=="mostlive",]
length(unique(d$workerid)) # n=13 (30)
summary(d)

#####
## duplicate observations by first predicate
#####

library(tidyr)

o <- d
o$rightpredicate1 = o$predicate2
o$rightpredicate2 = o$predicate1
o$rightresponse = 1-o$response
agr = o %>% 
        select(predicate1,rightpredicate1,response,rightresponse,workerid,noun,nounclass,class1,class2) %>%
        gather(predicateposition,predicate,predicate1:rightpredicate1,-workerid,-noun,-nounclass,-class1,-class2)
agr$correctresponse = agr$response
agr[agr$predicateposition == "rightpredicate1",]$correctresponse = agr[agr$predicateposition == "rightpredicate1",]$rightresponse
agr$correctclass = agr$class1
agr[agr$predicateposition == "rightpredicate1",]$correctclass = agr[agr$predicateposition == "rightpredicate1",]$class2
head(agr[agr$predicateposition == "rightpredicate1",])
agr$response = NULL
agr$rightresponse = NULL
agr$class1 = NULL
agr$class2 = NULL
nrow(agr) #676
#write.csv(agr,"vietnamese-naturalness-duplicated.csv")

#agr = agr[!is.na(agr$correctresponse),]
#v_agr <- agr
#write.csv(eng_agr,"../results/viet_agr.csv")

adj_agr = aggregate(correctresponse~predicate*correctclass,FUN=mean,data=agr)
adj_agr

class_agr = aggregate(correctresponse~correctclass,FUN=mean,data=agr)
class_agr

class_s = bootsSummary(data=agr, measurevar="correctresponse", groupvars=c("correctclass"))
#write.csv(class_s,"../results/viet_class_s.csv")

ggplot(data=class_s,aes(x=reorder(correctclass,-correctresponse,mean),y=correctresponse))+
  geom_bar(stat="identity",fill="lightgray",color="black")+
  geom_errorbar(aes(ymin=bootsci_low, ymax=bootsci_high, x=reorder(correctclass,-correctresponse,mean), width=0.1))+
  geom_hline(yintercept=0.5,linetype="dashed") + 
  xlab("\nadjective class")+
  ylab("preferred\ndistance from noun\n")+
  ylim(0,1)+
  #labs("order\npreference")+
  theme_bw()#+
#ggsave("vietnamese-class-distance.png")

