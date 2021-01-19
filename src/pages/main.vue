<template>
  <div class="q-pa-md table ">
      <div v-bind:class="{ active: leftDrawerOpen }">
        <div class="text-h5 text-left">Repair List</div>
        <q-markup-table>
          <thead>
            <tr>
              <th class="text-left element">Vechile</th>
              <th class="text-left element">Issue</th>
              <th class="text-left element">Priority</th>
              <th class="text-left element">current Status</th>
              <th class="text-left element">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <q-btn class="pac" label="Secondary" />
              </td>
              <td>
                <div>
                  <div class="font-weight-black">
                    Right Front Type needs Repair
                  </div>

                  <div>
                    The tires are worn out and needs to be replaced
                  </div>
                </div>
              </td>
              <td>
                <q-btn class="High" label="High" />
              </td>
              <td>not in requair</td>
              <td>9.30pm</td>
              <td>
                <q-btn
                  style="  color: #2a976d;
                        border: 1px solid #2a976d;
                        background: none;"
                  to="/view"
                >
                  view
                </q-btn>
              </td>
            </tr>
            <tr>
              <td>
                <q-btn class="pac" label="Secondary" />
              </td>
              <td>
                <div>
                  <div class="font-weight-black">
                    Right Front Type needs Repair
                  </div>

                  <div>
                    The tires are worn out and needs to be replaced
                  </div>
                </div>
              </td>
              <td>
                <q-btn class="High" label="High" />
              </td>
              <td>not in requair</td>
              <td>9.30pm</td>
              <td>
                <q-btn
                  style="  color: #2a976d;
                        border: 1px solid #2a976d;
                        background: none;"
                  to="/view"
                >
                  view
                </q-btn>
              </td>
            </tr>
            <tr>
              <td>
                <q-btn class="pac" label="Secondary" />
              </td>
              <td>
                <div>
                  <div class="font-weight-black">
                    Right Front Type needs Repair
                  </div>

                  <div>
                    The tires are worn out and needs to be replaced
                  </div>
                </div>
              </td>
              <td>
                <q-btn class="High" label="High" />
              </td>
              <td>not in requair</td>
              <td>9.30pm</td>
              <td>
                <q-btn
                  style="  color: #2a976d;
                        border: 1px solid #2a976d;
                        background: none;"
                  to="/view"
                >
                  view
                </q-btn>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
<div class="row">
  <!--
    more than 12 grid points together,
    so second <div> will wrap on next line
  -->
  <div class="col-8">col</div>
  <div class="col-8">col</div>
</div>
      </div>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      leftDrawerOpen: false
    };
  }
}
</script>
<style scoped>
.table {
  margin-top: 50px;
  margin-left: 10px;
}

.active {
  width: 1045px;
  margin-left: 310px;
}
.continer {
  padding-left: 50px;
}
.pac {
  background-color: #2dcc70;
  width: 90px;
  line-height: 1.3;
  color: #fff;
}
.High {
  background-color: #f19ca3;
  color: red;
}
</style>
