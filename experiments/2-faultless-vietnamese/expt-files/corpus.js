// 40 most frequent noun-predicate combinations in the BNC

//[
//		{"Sentence": "box red", "Predicate": "red", "Noun": "box"},
//		{"Sentence": "box big", "Predicate": "big", "Noun": "box"}
//		]

//testing corpus in Viet-Faultless-Disagreement-TEST file
var adjectives = [
		{"Predicate":"màu đỏ", "EnglishPredicate": "red", "Class":"color", "Positive": "màu đỏ", "Negative": "không phải là màu đỏ"},
		{"Predicate":"màu vàng", "EnglishPredicate": "yellow", "Class":"color"},
		{"Predicate":"màu xanh lá", "EnglishPredicate": "green", "Class":"color"},
		{"Predicate":"màu xanh dương", "EnglishPredicate": "blue", "Class":"color"},
		{"Predicate":"màu tím", "EnglishPredicate": "purple", "Class":"color"},
		{"Predicate":"màu nâu", "EnglishPredicate": "brown", "Class":"color"},											
		{"Predicate":"to", "EnglishPredicate": "big", "Class":"size"},
		{"Predicate":"nhỏ", "EnglishPredicate": "small", "Class":"size"},					
		{"Predicate":"nặng", "EnglishPredicate": "heavy", "Class":"size"},					
		{"Predicate":"nhẹ", "EnglishPredicate": "light", "Class":"size"},					
		{"Predicate":"ngắn", "EnglishPredicate": "short", "Class":"size"},					
		{"Predicate":"dài", "EnglishPredicate": "long", "Class":"size"},							
		{"Predicate":"Mỹ", "EnglishPredicate": "american", "Class":"nationality"},
		{"Predicate":"Đức", "EnglishPredicate": "german", "Class":"nationality"},
		{"Predicate":"Pháp", "EnglishPredicate": "french", "Class":"nationality"},
		{"Predicate":"trơn", "EnglishPredicate": "smooth", "Class":"texture"},
		{"Predicate":"rắn", "EnglishPredicate": "hard", "Class":"texture"},
		{"Predicate":"mềm", "EnglishPredicate": "soft", "Class":"texture"},
		{"Predicate":"cũ", "EnglishPredicate": "old", "Class":"age"},
		{"Predicate":"mới", "EnglishPredicate": "new", "Class":"age"},
		{"Predicate":"hư", "EnglishPredicate": "rotten", "Class":"age"},
		{"Predicate":"tươi", "EnglishPredicate": "fresh", "Class":"age"},
		{"Predicate":"mắc", "EnglishPredicate": "expensive", "Class":"quality"},
		{"Predicate":"tệ", "EnglishPredicate": "bad", "Class":"quality"},
		{"Predicate":"tròn", "EnglishPredicate": "round", "Class":"shape"},						
		{"Predicate":"vuông", "EnglishPredicate": "square", "Class":"shape"}
];

//added classifiers
var nouns = [
		{"Noun":"táo", "NounClass":"food", "Classifier":"Quả"},
		{"Noun":"chuối", "NounClass":"food", "Classifier":"Quả"},
		{"Noun":"cà rốt", "NounClass":"food", "Classifier":"Củ"},
		{"Noun":"phô mai", "NounClass":"food", "Classifier":"Lát"},
		{"Noun":"cà chua", "NounClass":"food", "Classifier":"Quả"},								
		{"Noun":"ghế", "NounClass":"furniture", "Classifier":"Chiếc"},								
		{"Noun":"tủ", "NounClass":"furniture", "Classifier":"Cái"},								
		{"Noun":"quạt máy", "NounClass":"furniture", "Classifier":"Chiếc"},								
		{"Noun":"ti-vi", "NounClass":"furniture", "Classifier":"Chiếc"},								
		{"Noun":"bàn", "NounClass":"furniture", "Classifier":"Cái"}								
];

var stimuli =  makeStims();

function makeStims() {
	stims = [];

	for (var i=0; i<adjectives.length; i++) {
		noun = _.sample(nouns);
		stims.push(
			{
				"Predicate":adjectives[i].Predicate,
				"PredicateEnglish":adjectives[i].EnglishPredicate,
				"Class":adjectives[i].Class,				
				"Noun":noun.Noun,
				"NounClass":noun.NounClass,
				"Classifier":noun.Classifier,
				"Positive": adjectives[i].Positive,
				"Negative": adjectives[i].Negative
			}
			);
		}
		
	return stims;
	
}
