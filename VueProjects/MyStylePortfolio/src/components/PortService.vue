<template>

 <div class="container">
    <div class="row">
        <div class="section-title padd-15">
            <h2>Services</h2>
        </div>
    </div>
    <div class="row">
        <div class="service-item padd-15">
            <div class="service-item-inner">
                <div class="icon">
                <i class="fa fa-mobile-alt"></i>
                </div>
                <h4 class="specialty">Web Design</h4>
                <p class="helping">I can deal with the design.</p>
            </div>
        </div>
                <div class="service-item padd-15">
                <div class="service-item-inner">
                    <div class="icon">
                    <i class="fa fa-laptop-code"></i>
                    </div>
                    <h4 class="specialty">Graphic Design</h4>
                    <p class="helping">Dealing with graphics.</p>
                </div>
            </div>
        <div class="service-item padd-15">
            <div class="service-item-inner">
                <div class="icon">
                <i class="fa fa-palette"></i>
                </div>
                <h4 class="specialty">Inovation Technology</h4>
                <p class="helping">Innovation everyday.</p>
            </div>
        </div>
                <div class="service-item padd-15">
                <div class="service-item-inner">
                    <div class="icon">
                    <i class="fa fa-code"></i>
                    </div>
                    <h4 class="specialty">Work in pairs</h4>
                    <p class="helping">Working in pairs with a collegue is very helpful.</p>
                </div>
            </div>
        <div class="service-item padd-15">
            <div class="service-item-inner">
                <div class="icon">
                <i class="fa fa-search"></i>
                </div>
                <h4 class="specialty">Ask for help</h4>
                <p class="helping">Don't be shy,ask for help.</p>
            </div>
        </div>
            <div class="service-item padd-15">
            <div class="service-item-inner">
                <div class="icon">
                <i class="fa fa-bullhorn"></i>
                </div>
                <h4 class="specialty">Questions</h4>
                <p class="helping">If you have questions,ask me for everything that is attached with my programming course.</p>
            </div>
        </div>
    </div>
</div>
</template>


<style scoped>
    .container {
        display: inline;
    }
    .row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem; 
        justify-content: center;
        cursor: pointer;
    }

    .service-item {
        color: white;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        max-width: 100%; 
    }

    .section-title {
        position: relative;
        left: 70px;
        color: white;
    }

    .specialty {
        font-weight: bold;
        text-align: center;
        color: white;
    }
    .helping {
        color: white;
        text-align: center;
    }

    .icon {
        text-align: center;
    }
    .service-item:hover {
      color: rgb(220, 13, 220);
      transition: all 0.35 ease-out;
      border-radius: 10px;
      opacity: 0.5;
    }

</style>
