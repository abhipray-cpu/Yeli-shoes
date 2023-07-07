<template>
    <div>
         <div class="baap">
            <div class="notification">
            <div class="image">
                <img src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/25aa2294-029c-418c-bf52-8f31d66bacc1/jordan.jpg" alt="name of product">
            </div>
            <div class="details">
                <div class="title">
                    <h2>Title of notification</h2>
                    <h3>Small details not so significant</h3>
                </div>
                <div class="para">
                    <h5>This will contain a long paragraph containing the notification details.
                        This will contain a long paragraph containing the notification details.
                        This will contain a long paragraph containing the notification details.
                        This will contain a long paragraph containing the notification details.
                        This will contain a long paragraph containing the notification details.
                        This will contain a long paragraph containing the notification details.
                        This will contain a long paragraph containing the notification details.
                        This will contain a long paragraph containing the notification details.
                        This will contain a long paragraph containing the notification details.
                    </h5>
                </div>
            </div>
        </div>
        <div class="button">
            <v-btn dark large shaped>
                Clear
            </v-btn>
        </div>
    </div>
    <div class="divider"></div>
    </div>
</template>


<style scoped>
@media only screen and (min-width:900px){
.notification{
    display:grid;
    grid-template-columns: 230px auto;
    padding-left:1.5%;
    padding-right:1.5%;
    padding-top:1%;
    padding-bottom:1%;
    cursor:pointer;
}
.image img{
    width:220px;
    height:200px;
}
.image{
    width:220px;
    height:200px;
}
.details{
    padding-right:1.5%;
    padding-top:1%;
    padding-bottom:1%;
    height:200px;
    overflow-y:hidden
}
.title h2{
    font-size:22px;
    font-weight:600;
    font-style:normal;
}
.title h3{
    font-size:14px;
    font-weight:500;
    font-style:normal;
    color:rgb(85, 85, 85);
    margin-top:.75%;
    margin-bottom:2%;
}
.para h5{
    font-size:16px;
    font-weight:400;
    font-style:normal;
    color:rgb(36, 36, 36);
}
.divider{
    width:100%;
    height:1px;
    background-color:rgb(155, 154, 154);
    margin-left:1%;
    margin-top:1%;
    margin-bottom:1%;
}
.button{
   margin-left:90%;
}
}
@media only screen and (max-width:480px){
.notification{
    display:grid;
    grid-template-columns: 35vw 65vw;
    padding-left:1.5%;
    padding-right:1.5%;
    padding-top:1%;
    padding-bottom:1%;
    cursor:pointer;
}
.image img{
    width:35vw;
    height:100px;
    margin-top:10px;
}
.image{
    width:35vw;
    height:100px;
}
.details{
    padding-right:1.5%;
    padding-top:1%;
    padding-bottom:1%;
    overflow-y:hidden
}
.title h2{
    font-size:20px;
    font-weight:500;
    font-style:normal;
    text-align: start;
    margin-left:5px;
}
.title h3{
    display: none;
}
.para h5{
    width:60vw;
    font-size:16px;
    font-weight:400;
    font-style:normal;
    color:rgb(36, 36, 36);
    height: 90px;
    margin-left:5px;
    margin-right:5px;
    overflow: hidden;
}
.divider{
    width:100%;
    height:1px;
    background-color:rgb(155, 154, 154);
    margin-left:1%;
    margin-top:1%;
    margin-bottom:1%;
}
.button{
   margin-left:70vw;
   margin-top:10px;
}
}
</style>