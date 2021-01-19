<template>
  <q-page class="continer">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left text-h5 ">view Report</th>
          <th class="text-right   ">
            Priority :
            <q-btn class="High" label="High" />
          </th>
          <th class="text-right  ">current Status : not in requair</th>
        </tr>
      </thead>

      <div>
  <div class="tex">
          <div>
            vechile :1234567678
          </div>
          <div>
            plate no : +09511564638
          </div>
          <div>
            Drivir : Ahmad ali
          </div>
          <div>
            contact : +963135432355
          </div>
        </div>
            <div class="tex">
            <div>
              Issuse : <br />
              Right of ..........
            </div>
            <div>
              Description <br />

              thie tires worn out and needs tp be replaced
            </div>
            <div>
              Drivir : Ahmad ali
            </div>
            <div>
              contact : +963135432355
            </div>
          </div>
        <q-img
          src="../assets/1.png"
          spinner-color="white"
          style="     height: 239px;
    max-width: 437px;
    left: 570px;     top: -370px;  "
        />
        <div  >
          <span style="    float: right;

    margin-right: -330px;
    margin-top: 10px;
    margin-bottom: 34px;"> cost : <span style=" background-color:#DDD; padding:10px;">  800$ </span>   </span>
          <q-btn  class="send"   >
           send to .....
        </q-btn>
        </div>

        <div class="clear"></div>
       <q-input
       style="    margin-top: -270px; margin-left:15px"
       placeholder="comment"
      v-model="text"
      filled
      type="textarea"
    />
     <q-input style=" margin-top: 15px; margin-left:15px" v-model="date" filled type="date" hint="Native date" />
        <div>
          <br />

        </div>
      </div>
    </q-markup-table>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      url: require("../assets/1.png"),
      text:"",
      date:""
    };
  }
};
</script>
<style scoped>

.High {
  background-color: #f19ca3;
  color: red;
}
.tex {

    margin-left: 15px;
    background-color: #ddd;
    font-weight: bolder;
    border: 24%;
    border-radius: 1%;
    padding: 15px;
    margin-top: 40px;
    margin-bottom: 45px;
}

.clear {
  clear: both;
}
.send {
      position: absolute;
    left: 890px;
     background-color: #2dcc70;
color: #fff;
}
</style>
