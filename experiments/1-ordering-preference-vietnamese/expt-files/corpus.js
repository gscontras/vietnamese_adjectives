// 40 most frequent noun-predicate combinations in the BNC

//[
//		{"Sentence": "box red", "Predicate": "red", "Noun": "box"},
//		{"Sentence": "box big", "Predicate": "big", "Noun": "box"}
//		]

var adjectives = _.shuffle([
		{"Predicate":"màu đỏ", "EnglishPredicate": "red", "Class":"color"},
		{"Predicate":"màu vàng", "Class":"color"},
		{"Predicate":"màu xanh lá", "Class":"color"},
		{"Predicate":"màu xanh dương", "Class":"color"},
		{"Predicate":"màu tím", "Class":"color"},
		{"Predicate":"màu nâu", "Class":"color"},											
		{"Predicate":"to", "Class":"size"},
		{"Predicate":"nhỏ", "Class":"size"},					
		{"Predicate":"nặng", "Class":"size"},					
		{"Predicate":"nhẹ", "Class":"size"},					
		{"Predicate":"ngắn", "Class":"size"},					
		{"Predicate":"dài", "Class":"size"},							
		{"Predicate":"Mỹ", "Class":"nationality"},
		{"Predicate":"Đức", "Class":"nationality"},
		{"Predicate":"Pháp", "Class":"nationality"},
		{"Predicate":"trơn", "Class":"texture"},
		{"Predicate":"rắn", "Class":"texture"},
		{"Predicate":"mềm", "Class":"texture"},
		{"Predicate":"cũ", "Class":"age"},
		{"Predicate":"mới", "Class":"age"},
		{"Predicate":"hư", "Class":"age"},
		{"Predicate":"tươi", "Class":"age"},
		{"Predicate":"mắc", "Class":"quality"},
		{"Predicate":"tệ", "Class":"quality"},
		{"Predicate":"tròn", "Class":"shape"},						
		{"Predicate":"vuông", "Class":"shape"}
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