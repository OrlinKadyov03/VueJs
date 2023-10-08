<template>
    <base-card>
   <form>
            <tr>
                <td>
                    <p>Основна Категория</p>
                    <select id="category" name="category">
                        <option value="cars">All</option>
                    </select>
                </td>
            </tr>

            <tr>
                <td>
                    <p>Марка:</p>
                    <select id="brand" name="brand"></select>
                </td>
                <td>
                    <p>Модел:</p>
                    <select id="model" name="model"></select>
                </td>
                <td>
                    <p>Регион:</p>
                    <select id="region" name="region"></select>
                </td>
                <td>
                    <p>Град:</p>
                    <select id="city" name="city"></select>
                </td>
            </tr>
            
            <tr>
                <td>
                    <p>Максимална цена:</p>
                    <input type="text" id="max-price" name="max-price">
                </td>
                <td>
                    <p>Година:</p>
                    <select id="year" name="year"></select>
                </td>
                <td>
                    <p>Резултати:</p>
                    <select id="sort-by" name="sort-by">
                        <option value="brand-model-price">Марка/Модел/Цена</option>
                        <option value="engine">Двигател</option>
                        <option value="transmission">Скоростна кутия</option>
                    </select>
                </td>
            </tr>
            
            <tr>
                <td>
                    <p>Тип двигател:</p>
                    <select name="engines" id="id">
                        <option value="diesel">Diesel</option>
                        <option value="petrol">Petrol</option>
                    </select>
                </td>
                <td>
                    <p>Тип скоростна кутия:</p>
                    <select id="gearbox-type" name="gearbox-type">
                        <option value="manual">Ръчна скоростна кутия</option>
                        <option value="automatic">Автоматична скоростна кутия</option>
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
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }


        input[type="submit"]:hover {
            background-color: #0056b3;
        }

</style>