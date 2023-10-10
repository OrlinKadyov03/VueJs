<template>
    <h5>Find Vehicles</h5>
    <base-card>
   <form>
    <div class="form-controls">
            <tr>
                <td>
                    <p>Category</p>
                    <select id="category" name="category">
                        <option value="cars">All</option>
                    </select>
                </td>
            </tr>

            <tr>
                <td>
                    <p>Brand</p>
                    <select id="brand" name="brand">
                        <option value="brand">All</option>
                    </select>
                </td>
                <td>
                    <p>Model</p>
                    <select id="model" name="model">
                        <option value="model">All</option>
                    </select>
                </td>
                <div class="rCR">
                <td>
                    <p>Region</p>
                    <select id="region" name="region">
                        <option value="all">All</option>
                        <option value="region">Region</option>
                    </select>
                </td>
                <td>
                    <p>City</p>
                    <select id="city" name="city">
                        <option value="all">All</option>
                        <option value="velingrad">Velingrad</option>
                        <option value="sofia">Sofia</option>
                    </select>
                </td>
              </div>
            </tr>
            
            <tr>
                <td>
                    <p>Max Price</p>
                    <input type="text" id="max-price" name="max-price">
                </td>
                <td>
                    <p>Year</p>
                    <select id="year" name="year"></select>
                </td>
                <div class="rCR">
                <td>
                    <p>Results</p>
                    <select id="sort-by" name="sort-by">
                        <option value="brand-model-price">Brand/Model/Price</option>
                        <option value="engine">Engine</option>
                        <option value="transmission">Gearbox</option>
                    </select>
                </td>
            </div>
            </tr>
            
            <tr>
                <td>
                    <p>Type</p>
                    <select name="engines" id="id">
                        <option value="all">All</option>
                        <option value="diesel">Diesel</option>
                        <option value="petrol">Petrol</option>
                    </select>
                </td>
                <td>
                    <p>Gearbox Type</p>
                    <select id="gearbox-type" name="gearbox-type">
                        <option value="all">All</option>
                        <option value="manual">Manual</option>
                        <option value="automatic">Automatic</option>
                    </select>
                </td>
            </tr>

        <input type="submit" value="Find">
        <input class="ch" type="checkbox"><label for="">New</label>
        <input class="ch" type="checkbox"><label>Used</label>
        <input class="ch" type="checkbox"><label for="">Car Parts</label>
    </div>
    </form>
</base-card>
</template>

<script>
export default {
  data(){

  }
}
</script>

<style scoped>
   
        th, td {
            padding: 5px;
        }

        p {
            text-align: left;
            font-size: 14px;
            position: relative;
            top: 10px;
            font-weight: bold;
        }

        select {
            width: 100%;
            padding: 2px;
            margin: -5px 0; 
        }

        input[type="text"], select {
            width: 100%;
            padding: 2px; 
            margin: 0rem ;
            
        }

        input[type="submit"] {
            background-color: rgb(232, 223, 223);
            color: black;
            font-weight: bold;
            padding: 12px 120px;
            border-radius: px;
            cursor: pointer;
            position: relative;
            left: 322px;
            top: -45px;
            border: 1px solid black;
        }


        input[type="submit"]:hover {
            background-color: #dcdada
        }

        .ch {
            position: relative;
            left: -280px;
        }
        label {
            position: relative;
            left: -280px;
            font-size: 12px;
            color: red;
        }

        .form-controls {
          margin-top: -30px;
          margin-bottom: -20px;
        }

        h5 {
            margin-left: 250px;
            position: relative;
            top: 145px;
        }
        .rCR {
            margin-left: 20px;
        }
</style>