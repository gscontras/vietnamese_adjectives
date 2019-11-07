// 40 most frequent noun-predicate combinations in the BNC

//[
//		{"Sentence": "box red", "Predicate": "red", "Noun": "box"},
//		{"Sentence": "box big", "Predicate": "big", "Noun": "box"}
//		]

//testing corpus in Viet-Faultless-Disagreement-TEST file
var adjectives = [
		{"Predicate":"màu đỏ", "EnglishPredicate": "red", "Class":"color", "Positive": "màu đỏ", "Negative": "không phải là màu đỏ"},
		{"Predicate":"màu vàng", "EnglishPredicate": "yellow", "Class":"color", "Positive":"màu vàng", "Negative":"không phải là màu vàng"},
		{"Predicate":"màu xanh lá", "EnglishPredicate": "green", "Class":"color", "Positive":"màu xanh lá", "Negative":"không phải là màu xanh lá"},
		{"Predicate":"màu xanh dương", "EnglishPredicate": "blue", "Class":"color", "Positive":"màu xanh dương", "Negative":"không phải là màu xanh dương"},
		{"Predicate":"màu tím", "EnglishPredicate": "purple", "Class":"color", "Positive":"màu tím", "Negative":"không phải là màu tím"},
		{"Predicate":"màu nâu", "EnglishPredicate": "brown", "Class":"color", "Positive":"màu nâu", "Negative":"không phải là màu nâu"},											
		{"Predicate":"to", "EnglishPredicate": "big", "Class":"size", "Positive":"to", "Negative":"không to"},
		{"Predicate":"nhỏ", "EnglishPredicate": "small", "Class":"size", "Positive":"nhỏ", "Negative":"không nhỏ"},					
		{"Predicate":"nặng", "EnglishPredicate": "heavy", "Class":"size", "Positive":"nặng", "Negative":"không nặng"},					
		{"Predicate":"nhẹ", "EnglishPredicate": "light", "Class":"size", "Positive":"nhẹ", "Negative":"không nhẹ"},					
		{"Predicate":"ngắn", "EnglishPredicate": "short", "Class":"size", "Positive":"ngắn", "Negative":"không ngắn"},					
		{"Predicate":"dài", "EnglishPredicate": "long", "Class":"size", "Positive":"dài", "Negative":"không dài"},							
		//{"Predicate":"Mỹ", "EnglishPredicate": "american", "Class":"nationality", "Positive":"", "Negative":""},
		//{"Predicate":"Đức", "EnglishPredicate": "german", "Class":"nationality", "Positive":"", "Negative":""},
		//{"Predicate":"Pháp", "EnglishPredicate": "french", "Class":"nationality", "Positive":"", "Negative":""},
		{"Predicate":"trơn", "EnglishPredicate": "smooth", "Class":"texture", "Positive":"trơn", "Negative":"không trơn"},
		{"Predicate":"rắn", "EnglishPredicate": "hard", "Class":"texture", "Positive":"rắn", "Negative":"không rắn"},
		{"Predicate":"mềm", "EnglishPredicate": "soft", "Class":"texture", "Positive":"mềm", "Negative":"không mềm"},
		{"Predicate":"cũ", "EnglishPredicate": "old", "Class":"age", "Positive":"cũ", "Negative":"không cũ"},
		{"Predicate":"mới", "EnglishPredicate": "new", "Class":"age", "Positive":"mới", "Negative":"không mới"},
		{"Predicate":"hư", "EnglishPredicate": "rotten", "Class":"age", "Positive":"hư", "Negative":"không hư"},
		{"Predicate":"tươi", "EnglishPredicate": "fresh", "Class":"age", "Positive":"tươi", "Negative":"không tươi."},
		{"Predicate":"mắc", "EnglishPredicate": "expensive", "Class":"quality", "Positive":"mắc", "Negative":"không mắc"},
		{"Predicate":"tệ", "EnglishPredicate": "bad", "Class":"quality", "Positive":"tệ", "Negative":"không tệ"},
		{"Predicate":"tròn", "EnglishPredicate": "round", "Class":"shape", "Positive":"hình trơn", "Negative":"không phải là hình tròn"},						
		{"Predicate":"vuông", "EnglishPredicate": "square", "Class":"shape", "Positive":"hình vuông", "Negative":"không phải là hình vuông"}
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
