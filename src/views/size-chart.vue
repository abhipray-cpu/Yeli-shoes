<template>
<div>
  <div id="details">
    <h2 style="margin-top:5%">Find your correct size in the chart below.</h2>
    <h2 style="margin-top:2.5%;">Scroll horizontally to see more sizes.</h2>

    <h1 style="margin-top:7%;">Size Chart</h1>
  </div>
  <!--this is the size chart table-->
  <div>
  <v-card
  width="900"
  elevation="3"
  class="container "
  >
    <v-data-table
      :headers="headers"
      :items="desserts"
      hide-default-header
    hide-default-footer
    calculate-widths
    class="table"
    width="900"
    ></v-data-table>
  </v-card>
  </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Size',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Size1', value: 'Size1' },
          { text: 'Size2', value: 'Size2' },
          { text: 'Size3', value: 'Size3' },
          { text: 'Size4', value: 'Size4' },
          { text: 'Size5', value: 'Size5' },
          { text: 'Size6', value: 'Size6' },
          { text: 'Size7', value: 'Size7' },
          { text: 'Size8', value: 'Size8' },
          { text: 'Size9', value: 'Size9' },
          { text: 'Size10', value: 'Size10' },
          { text: 'Size11', value: 'Size11' },
          { text: 'Size12', value: 'Size12' },
          { text: 'Size13', value: 'Size13' },
          { text: 'Size14', value: 'Size14' },
          { text: 'Size15', value: 'Size15' },
          { text: 'Size16', value: 'Size16' },
          { text: 'Size17', value: 'Size17' },
          { text: 'Size18', value: 'Size18' },
          { text: 'Size19', value: 'Size19' },
          { text: 'Size20', value: 'Size20' },
          { text: 'Size21', value: 'Size21' },
          { text: 'Size22', value: 'Size22' },
          { text: 'Size23', value: 'Size23' },
          { text: 'Size24', value: 'Size24' },
          { text: 'Size25', value: 'Size25' },
          { text: 'Size26', value: 'Size26' },
          { text: 'Size27', value: 'Size27' },
          { text: 'Size28', value: 'Size28' },
          { text: 'Size29', value: 'Size29' },
          { text: 'Size30', value: 'Size30' },
          { text: 'Size31', value: 'Size31' },
          { text: 'Size32', value: 'Size32' },
          { text: 'Size33', value: 'Size33' },
           { text: 'Size34', value: 'Size34' },
          { text: 'Size35', value: 'Size35' },
          { text: 'Size36', value: 'Size36' },
          { text: 'Size37', value: 'Size37' },
          { text: 'Size38', value: 'Size38' },
        ],
        desserts: [
          {
            name: "US – Men's'",
            Size1:3.5,
            Size2:4.0,
            Size3:4.5,
            Size4:5.0,
            Size5:5.5,
            Size6:6.0,
            Size7:6.5,
            Size8:7.0,
            Size9:7.5,
            Size10:8.0,
            Size11:8.5,
            Size12:9.0,
            Size13:9.5,
            Size14:10.0,
            Size15:10.5,
            Size16:11.0,
            Size17:11.5,
            Size18:12.0,
            Size19:12.5,
            Size20:13.0,
            Size21:13.5,
            Size22:14.0,
            Size23:14.5,
            Size24:15.0,
            Size25:15.5,
            Size26:16.0,
            Size27:16.5,
            Size28:17.0,
            Size29:17.5,
            Size30:18.0,
            Size31:18.5,
            Size32:19.0,
            Size33:19.5,
            Size34:20.0,
            Size35:20.5,
            Size36:21.0,
            Size37:21.5,
            Size38:22.0,

          },
        
          {
            name: "US – Women's",
            Size1:3.5,
            Size2:4.0,
            Size3:4.5,
            Size4:5.0,
            Size5:5.5,
            Size6:6.0,
            Size7:6.5,
            Size8:7.0,
            Size9:7.5,
            Size10:8.0,
            Size11:8.5,
            Size12:9.0,
            Size13:9.5,
            Size14:10.0,
            Size15:10.5,
            Size16:11.0,
            Size17:11.5,
            Size18:12.0,
            Size19:12.5,
            Size20:13.0,
            Size21:13.5,
            Size22:14.0,
            Size23:14.5,
            Size24:15.0,
            Size25:15.5,
            Size26:16.0,
            Size27:16.5,
            Size28:17.0,
            Size29:17.5,
            Size30:18.0,
            Size31:18.5,
            Size32:19.0,
            Size33:19.5,
            Size34:20.0,
            Size35:20.5,
            Size36:21.0,
            Size37:21.5,
            Size38:22.0,

          },
          {
            name: "US – Kid's'",
          
            Size1:5.0,
            Size2:5.5,
            Size3:6.0,
            Size4:6.5,
            Size5:7.0,
            Size6:7.5,
            Size7:8.0,
            Size8:8.5,
            Size9:9.0,
            Size10:9.5,
            Size11:10.0,
            Size12:10.5,
            Size13:11.0,
            Size14:11.5,
            Size15:12.0,
            Size16:12.5,
            Size17:13.0,
            Size18:13.5,
            Size19:14.0,
            Size20:14.5,
            Size21:15.0,
            Size22:15.5,
            Size23:16.0,
            Size24:16.5,
            Size25:17.0,
            Size26:17.5,
            Size27:18.0,
            Size28:18.5,
            Size29:19.0,
            Size30:19.5,
            Size31:20.0,
            Size32:20.5,
            Size33:21.0,
            Size34:21.5,
            Size35:22.0,
            Size36:22.5,
            Size37:23.0,
            Size38:23.5,

          },
          {
            name: "UK",
            Size1:3.0,
            Size2:3.5,
            Size3:4.0,
            Size4:4.5,
            Size5:5.0,
            Size6:5.5,
            Size7:6.0,
            Size8:6.5,
            Size9:7.0,
            Size10:7.5,
            Size11:8.0,
            Size12:8.5,
            Size13:9.0,
            Size14:9.5,
            Size15:10.0,
            Size16:10.5,
            Size17:11.0,
            Size18:11.5,
            Size19:12.0,
            Size20:12.5,
            Size21:13.0,
            Size22:13.5,
            Size23:14.0,
            Size24:14.5,
            Size25:15.0,
            Size26:15.5,
            Size27:16.0,
            Size28:16.5,
            Size29:17.0,
            Size30:17.5,
            Size31:18.0,
            Size32:18.5,
            Size33:19.0,
            Size34:19.5,
            Size35:20.0,
            Size36:20.5,
            Size37:21.0,
            Size38:21.5,


          },
          {
            name: "CM",
            Size1:22,
Size2:22.5,
Size3:23,
Size4:23.5,
Size5:23.5,
Size6:24,
Size7:24.5,
Size8:25,
Size9:25.5,
Size10:26,
Size11:26.5,
Size12:27,
Size13:27.5,
Size14:28,
Size15:28.5,
Size16:29,
Size17:29.5,
Size18:30,
Size19:30.5,
Size20:31,
Size21:31.5,
Size22:32,
Size23:32.5,
Size24:33,
Size25:33.5,
Size26:34,
Size27:34.5,
Size28:35,
Size29:35.5,
Size30:36,
Size31:36.5,
Size32:37,
Size33:37.5,
Size34:38,
Size35:38.5,
Size36:39,
Size37:39.5,
Size38:40,

          },
           {
            name: "EU",
            Size1:35.5,Size2:36,Size3:36.5,Size4:37.5,Size5:38,Size6:38.5,
Size7:39,Size8:40,Size9:40.5,Size10:41,Size11:42,Size12:42.5,Size13:43,
Size14:44,Size15:44.5,Size16:45,Size17:45.5,Size18:46,Size19:47,Size20:47.5
,Size21:48,Size22:48.5,Size23:49,Size24:49.5,Size25:50,Size26:50.5	
,Size27:51,Size28:51.5,Size29:52,Size30:52.5,Size31:53,Size32:53.5
,Size33:54,Size34:54.5,Size35:55,Size36:55.5,Size37:56,Size38:56.5


          },
        ],
      }
    },
  }
</script>

<style>
.container{
  margin-top:0.45%;
  margin-bottom:10%;
}
/*this styling is for changing the styling*/
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
 font-weight:500;
 font-style: normal;
 font-size:18px;
}
/*these styling will fix the column1*/
 table > tbody > tr > td:nth-child(1),
  table > thead > tr > th:nth-child(1) {
    position: sticky !important;
    position: -webkit-sticky !important;
    left: 0;
    z-index: 9998;
  
     background-color: rgb(192, 190, 190);
    
  }
  table > thead > tr > th:nth-child(1) {
    z-index: 9999;
  }
  /*this will make the table stripped*/
  tbody td:nth-of-type(odd) {
   background: rgb(239, 239, 239)
 }

h2{
  font-weight:400;
  font-size:19px;
  font-style:normal;
  margin-left:20%;
  color: rgba(0,0,0,0.9);
}
h1
{
  font-weight:500;
  font-size:24px;
  font-style:normal;
  margin-left:20%;
  color: rgba(0,0,0,0.9);
}
</style>