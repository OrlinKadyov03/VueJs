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
                <h4>Web Design</h4>
                <p>I can deal with the design.</p>
            </div>
        </div>
                <div class="service-item padd-15">
                <div class="service-item-inner">
                    <div class="icon">
                    <i class="fa fa-laptop-code"></i>
                    </div>
                    <h4>Graphic Design</h4>
                    <p>Dealing with graphics.</p>
                </div>
            </div>
        <div class="service-item padd-15">
            <div class="service-item-inner">
                <div class="icon">
                <i class="fa fa-palette"></i>
                </div>
                <h4>Inovation Technology</h4>
                <p>Innovation everyday.</p>
            </div>
        </div>
                <div class="service-item padd-15">
                <div class="service-item-inner">
                    <div class="icon">
                    <i class="fa fa-code"></i>
                    </div>
                    <h4>Work in pairs</h4>
                    <p>Working in pairs with a collegue is very helpful.</p>
                </div>
            </div>
        <div class="service-item padd-15">
            <div class="service-item-inner">
                <div class="icon">
                <i class="fa fa-search"></i>
                </div>
                <h4>Ask for help</h4>
                <p>Don't be shy,ask for help.</p>
            </div>
        </div>
            <div class="service-item padd-15">
            <div class="service-item-inner">
                <div class="icon">
                <i class="fa fa-bullhorn"></i>
                </div>
                <h4>Questions</h4>
                <p>If you have questions,ask me for everything that is attached with my programming course.</p>
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
        gap: 2rem; 
        justify-content: center;
    }

    .service-item {
        color: white;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        max-width: 100%; 
    }

    .section-title {
        position: relative;
        left: 70px;
        color: white;
    }
</style>
