# -*- coding: utf-8 -*-

import os
import json

def add_upazila_id_to_postcodes(postcodes, upazilas):
    for postcode in postcodes:
        # Check if 'district_id' is present in the postcode
        if 'district_id' in postcode:
            # Find the matching upazila in the upazilas data
            matching_upazila = next((u for u in upazilas if u.get('name') == postcode.get('upazila') and u.get('district_id') == postcode.get('district_id')), None)
            
            # If a match is found, add the 'id' field to the postcode
            if matching_upazila:
                postcode['upazila_id'] = matching_upazila.get('id')

def save_to_updated_format(data, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    # Provide the specific path to your pp_1.json file
    input_file_postcodes = "H:/Organization/Foodie- WEB/Foodie/src/assets/bangladesh-geojson/pp_1.json"
    input_file_upazilas = "H:/Organization/Foodie- WEB/Foodie/src/assets/bangladesh-geojson/bd-upazilas.json"
    output_file = "H:/Organization/Foodie- WEB/Foodie/src/assets/bangladesh-geojson/updated_pp_1.json"

    try:
        # Load data from the input files
        with open(input_file_postcodes, 'r', encoding='utf-8') as f:
            postcodes_data = json.load(f)

        with open(input_file_upazilas, 'r', encoding='utf-8') as f:
            upazilas_data = json.load(f)

        # Add upazila_id to postcodes
        add_upazila_id_to_postcodes(postcodes_data.get('postcodes', []), upazilas_data.get('upazilas', []))

        # Save the updated data to the output file
        save_to_updated_format(postcodes_data, output_file)

        print(f"Updated format saved to {output_file}")

    except Exception as e:
        print(f"Error: {e}")
