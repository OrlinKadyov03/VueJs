<template>
    <base-card>
   <form>
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
                    <select id="brand" name="brand"></select>
                </td>
                <td>
                    <p>Model</p>
                    <select id="model" name="model"></select>
                </td>
                <td>
                    <p>Region</p>
                    <select id="region" name="region"></select>
                </td>
                <td>
                    <p>City</p>
                    <select id="city" name="city">
                        <option value="velingrad">Velingrad</option>
                        <option value="sofia">Sofia</option>
                    </select>
                </td>
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
                <td>
                    <p>Results</p>
                    <select id="sort-by" name="sort-by">
                        <option value="brand-model-price">Brand/Model/Price</option>
                        <option value="engine">Engine</option>
                        <option value="transmission">Gearbox</option>
                    </select>
                </td>
            </tr>
            
            <tr>
                <td>
                    <p>Type</p>
                    <select name="engines" id="id">
                        <option value="diesel">Diesel</option>
                        <option value="petrol">Petrol</option>
                    </select>
                </td>
                <td>
                    <p>Gearbox Type</p>
                    <select id="gearbox-type" name="gearbox-type">
                        <option value="manual">Manual</option>
                        <option value="automatic">Automatic</option>
                    </select>
                </td>
            </tr>
        <input type="submit" value="Търси">
    </form>
</base-card>
</template>

<style scoped>

        th, td {
            padding: 5px;
        }

        p {
            text-align: left;
            font-size: 14px;
            position: relative;
            top: 10px;
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
            background-color: white;
            color: black;
            font-weight: bold;
            padding: 12px 120px;
            border-radius: 5px;
            cursor: pointer;
            position: relative;
            left: 290px;
            top: -40px;
            border: 1px solid black;
        }


        input[type="submit"]:hover {
            background-color: #dcdada
        }

</style>