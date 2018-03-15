
/*
This is the seed of a more complex solution involving creation of a more complex
json structure.
*/

const BagOf = function(struct) {
	return {
		'rdf:Bag': {
			'rdf:li' : struct
		}
	};
}

const Dimensions = {
	//TBD
};

const Area = {
	'stArea:x': 'number',
	'stArea:y': 'number',
	'stArea:w': 'number',
	'stArea:h': 'number',
	'stArea:unit': 'text'
};

const RegionStruct = {
	'mwg-rs:Area': Area,
	'mwg-rs:Type': ['Face', 'Pet', 'Focus', 'BarCode'],	// Optional
	'mwg-rs:Name': 'text', // Optional
	'mwg-rs:Description': 'text', // Optional
	'mwg-rs:FocusUsage': ['Closed', 'Choice'], // Required if mwg-rs:Type= “Focus”
	'mwg-rs:BarCodeValue': 'text', //Optional
	'mwg-rs:Extensions': {} //Optional, Undefined Struct
}

const RegionInfo = {
	'mwg-rs:RegionList' : BagOf(RegionStruct),
	'mwg-rs:AppliedToDimensions': Dimensions
}

const xmp_definition = {
	'x:xmpmeta': {
		'rdf:RDF': {
			'rdf:Description': {
				'mwg-rs:Regions': RegionInfo
			}
		}
	}
};
