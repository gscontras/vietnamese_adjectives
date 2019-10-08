// 40 most frequent noun-predicate combinations in the BNC

//[
//		{"Sentence": "box red", "Predicate": "red", "Noun": "box"},
//		{"Sentence": "box big", "Predicate": "big", "Noun": "box"}
//		]

var adjectives = _.shuffle([
		{"Predicate":"màu đỏ", "EnglishPredicate": "red", "Class":"color"},
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
]);

// to fix "{"Noun":"apple", "NounClass":"food", "Classifier", "XXX"}" in future
var nouns = [
		{"Noun":"táo", "NounClass":"food", "Classifier":"XXX"},
		// {"Noun":"chuối", "NounClass":"food"},
		// {"Noun":"cà rốt", "NounClass":"food"},
		// {"Noun":"phô mai", "NounClass":"food"},
		// {"Noun":"cà chua", "NounClass":"food"},								
		// {"Noun":"ghế", "NounClass":"furniture"},								
		// {"Noun":"tủ", "NounClass":"furniture"},								
		// {"Noun":"quạt máy", "NounClass":"furniture"},								
		// {"Noun":"ti-vi", "NounClass":"furniture"},								
		// {"Noun":"bàn", "NounClass":"furniture"}								
];

var stimuli =  makeStims();

function makeStims() {
	stims = [];

	while (stims.length < 26) {
		noun = _.sample(nouns);
		pred1 = _.sample(adjectives);
		pred2 = _.sample(adjectives);
		if (pred1.Class!=pred2.Class) {
			stims.push(
				{
					"Predicate1":pred1.Predicate,
					"Predicate1English":pred1.EnglishPredicate,
					"Class1":pred1.Class,	
					"Predicate2":pred2.Predicate,
					"Predicate2English":pred2.EnglishPredicate,
					"Class2":pred2.Class,			
					"Noun":noun.Noun,
					"NounClass":noun.NounClass,
					"Classifier":noun.Classifier
				}			
			);
		}
	}
		
	return stims;
	
}