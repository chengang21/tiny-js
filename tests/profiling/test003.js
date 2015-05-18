// Bubble sort

function sort(array) {
	var a_len = array.length;
	for(var i = 0; i < a_len-1; i++) {
		for(var j = i; j < a_len; j++) {
			if(array[i] > array[j]) {
				var temp = array[j];
				array[j] = array[i];
				array[i] = temp;
			}
		}
	}	
}

function create() {
	var a = [];
	for(var i = 0; i < NUM_ELEMENTS; i++)
		a[i] = Math.rand();
	return a;
}

function init() {
	NUM_ITERATIONS = 30;
	NUM_ELEMENTS = 500;
}

function get_iterations() { return NUM_ITERATIONS; }

function setup() {
	ARRAY = create();
}

function run() {
	print("Running bubble sort - " + NUM_ITERATIONS + " iterations; " + NUM_ELEMENTS + "-element arrays");

	for(var i = 0; i < NUM_ITERATIONS; i++)
		sort(ARRAY);

	return "sort()";
}