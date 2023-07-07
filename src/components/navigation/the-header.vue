<template>
    <div id="controller">
      <div id="papa">
            <div @mouseover="toggleOverlay(1)" style="width:fit-content;margin-left:45%">
            <h2>Unisex</h2>
        </div>
        <div @mouseover="toggleOverlay(2)" style="width:fit-content;margin-left:45%">
            <h2>Men</h2>
        </div>
        <div @mouseover="toggleOverlay(3)" style="width:fit-content;margin-left:45%">
            <h2>Women</h2>
        </div>
      </div>
        <template>
  <div class="expansion">
    <div :class="[initial?'expansionBody':boxContent?'expand':'collapse']" id="expansionBody">
        <div class="column">
            <h3 class="subHeader">Featured</h3>
            <ul>
                <li>New Releases</li>
                <li>Nike Air</li>
                <li>Air Jordans</li>
                <li>Reebok Black Knight</li>
                <li>Gucci Royal</li>
                <li>RedChief Army</li>
                <li>Woodland Campers</li>
                <li>Sneaker new line</li>
                <li>Crocs Sandals</li>
            </ul>
        </div>
         <div class="column">
            <h3 class="subHeader">Shoes</h3>
             <ul>
                <li>Sneakers</li>
                <li>Flip Flops</li>
                <li>Boots</li>
                <li>Slip ons</li>
                <li>High Boots</li>
                <li>Sports</li>
                <li>Office</li>
                <li>Comfort</li>
                <li>Sandals</li>
            </ul>
        </div>
         <div class="column">
            <h3 class="subHeader">Shop By Sport</h3>
            <ul>
                <li>Running</li>
                <li>Basketball</li>
                <li>Football</li>
                <li>Tennis</li>
                <li>Yoga</li>
                <li>Skates</li>
                <li>Trekking</li>
                <li>Golf</li>
                <li>Gym and training</li>
                <li>Cricket</li>
            </ul>
        </div>
         <div class="column">
            <h3 class="subHeader">Shop by Brand</h3>
            <ul>
                <li>Adidas</li>
                <li>Nike</li>
                <li>Puma</li>
                <li>Reebok</li>
                <li>Under Armour</li>
                <li>Woodland</li>
                <li>RedChief</li>
                <li>Bata</li>
                <li>Air Jordans</li>
                <li>H&M</li>
                <li>Miu Miu</li>
                <li>Action</li>
                <li>Burberry</li>
                <li>Crocs</li>
                <li>New Balance</li>
                <li>Gucci</li>

            </ul>
        </div>
    </div>
    <div :class="[initial?'oerlay':boxContent?'overlayActive':'overlayClose']" @mouseover="closeOverlay"></div>
  </div>
</template>
    </div>
    
</template>

<script>
export default {
        data: () => ({
      overlay: false,
      initial:true,
      boxContent:false,
      prevHolder:1,
      currHolder:1,
    }),
    methods: {
      toggleOverlay(holder) {
          this.currHolder = holder;

          if(this.currHolder==this.prevHolder)
          {
              this.initial=false;
        this.boxContent = true;
        this.overlay = true;
        this.prevHolder=this.currHolder;
          }
          else
          {
              this.prevHolder=this.currHolder;
          }
      },
      closeOverlay(){
          this.initial=false;
        this.boxContent = false;
        this.overlay = false;
      }
    },

    watch: {
      overlay (val) {
        val && setTimeout(() => {
          this.overlay = false
        }, 2000)
      },
    },

}
</script>

<style scoped>
@media only screen and (min-width:900px){
    #papa{
        display:grid;
        grid-template-columns: repeat(3,100px);
        padding-left:37%;
    }
    #controller h2{
        font-weight:500;
        font-style:normal;
        font-size:19px;
        cursor:pointer;
        width:fit-content;
       
    }
    #container h2:hover{
        font-weight: 600;
    }
    .expansionBody{
        display:none;
        margin-top:10px;
        width:100%;
        height:0px;
        background-color:rgb(240, 240, 240);
    }
    .expand{
        margin-top:10px;
        width:100%;
        height:300px;
        background-color:white;
        animation-name:animateExpansion;
        animation-duration:0.25s;
        animation-fill-mode: forwards;
    }
    .collapse{
        margin-top:10px;
        width:100%;
        height:400px;
        background-color:white;
        animation-name:animateCollapse;
        animation-duration:0.25s;
        animation-fill-mode: forwards;
    }
    @keyframes animateExpansion{
        from{
            display:none;
            height: 0px;
        }
        to{
            display:block;
            height:500px;
        }
    }
    @keyframes animateCollapse{
        from{
            height:500px;
        }
        to{
            height:0px;
        }
    }
    .overlay{
        cursor: pointer;
        height:0px;
        top: 0;
      position: absolute;
      left: 0;
      width: 100%;
      z-index: 10;
      background-color: rgba(0,0,0,0.5);
    }
    .overlayActive{
        cursor: pointer;
      position: absolute;
      left: 0;
      width: 100%;
      z-index: 10;
      background-color: rgba(0,0,0,0.5);
      animation-name: overlayExpand;
      animation-duration: 0.25s;
      backdrop-filter: blur(1px);
        animation-fill-mode: forwards;
    }
    .overlayClose{
        cursor: pointer;
      position: absolute;
    width: 100%;
      left: 0;
      z-index: 10;
      background-color: rgba(0,0,0,0.5);
        animation-name: overlayCollapse;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
    }
    /*animation for overlays*/
    @keyframes overlayExpand{
        from{
            height:0px;
        }
        to{
            height:100%;
        }
    }
    @keyframes overlayCollapse{
        from{
            height:100%;
        }
        to{
            height:0px;
        }
    }
    #expansionBody{
        display: grid;
        grid-template-columns:repeat(4,auto);
        padding-left:13%;
         padding-right:13%;
        padding-top:2%;
    }
    .subHeader{
        font-weight: 500;
        font-style:normal;
        cursor: pointer;
    }
    ul{
        list-style-type: none;
        margin-top:10px;
    }
    ul li{
        margin-top:1.75%;
        margin-bottom:1.75%;
        cursor: pointer;
    }
    ul li:hover{
        color:rgba(0,0,0,0.6)
    }
}
@media only screen and (max-width:480px){
    #controller{
        width: 100vw;
        height: fit-content;
    }
    #papa{
        display:grid;
        width:90vw;
        margin-left:5vw;
        grid-template-columns: repeat(3,90px);
    }
    #controller h2{
        font-weight:500;
        font-style:normal;
        font-size:23px;
        width:fit-content;
        margin-top:6px;
       
    }
    #container h2:hover{
        font-weight: 600;
    }
    .expansionBody{
        display:none;
        margin-top:10px;
        width:100%;
        height:0px;
        background-color:rgb(240, 240, 240);
    }
    .expand{
        margin-top:10px;
        width:100%;
        height:300px;
        background-color:white;
        animation-name:animateExpansion;
        animation-duration:0.25s;
        animation-fill-mode: forwards;
    }
    .collapse{
        margin-top:10px;
        width:100%;
        height:400px;
        background-color:white;
        animation-name:animateCollapse;
        animation-duration:0.25s;
        animation-fill-mode: forwards;
    }
    @keyframes animateExpansion{
        from{
            display:none;
            height: 0px;
        }
        to{
            display:block;
            height:500px;
        }
    }
    @keyframes animateCollapse{
        from{
            height:500px;
        }
        to{
            height:0px;
        }
    }
    .overlay{
        cursor: pointer;
        height:0px;
        top: 0;
      position: absolute;
      left: 0;
      width: 100%;
      z-index: 10;
      background-color: rgba(0,0,0,0.5);
    }
    .overlayActive{
        cursor: pointer;
      position: absolute;
      left: 0;
      width: 100%;
      z-index: 10;
      background-color: rgba(0,0,0,0.5);
      animation-name: overlayExpand;
      animation-duration: 0.25s;
      backdrop-filter: blur(1px);
        animation-fill-mode: forwards;
    }
    .overlayClose{
        cursor: pointer;
      position: absolute;
    width: 100%;
      left: 0;
      z-index: 10;
      background-color: rgba(0,0,0,0.5);
        animation-name: overlayCollapse;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
    }
    /*animation for overlays*/
    @keyframes overlayExpand{
        from{
            height:0px;
        }
        to{
            height:100%;
        }
    }
    @keyframes overlayCollapse{
        from{
            height:100%;
        }
        to{
            height:0px;
        }
    }
    #expansionBody{
        display: grid;
        grid-template-columns:repeat(4,25vw);
        padding-top:2%;
    }
    .subHeader{
        font-weight: 500;
        font-style:normal;
        cursor: pointer;
        font-size:21px;
    }
    ul{
        list-style-type: none;
        margin-top:10px;
    }
    ul li{
        margin-top:1.75%;
        margin-bottom:1.75%;
        cursor: pointer;
        font-size:19px;
        margin-top:1px;
    }
    ul li:hover{
        color:rgba(0,0,0,0.6)
    }
    .column{
        width:24vw;
        margin-left:0.5vw;
        margin-right:0.5vw;
        overflow-x:hidden ;

    }
}
</style>