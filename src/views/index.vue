<template>
  <div v-loading="loading">
    <div class="homeCard allUse">
      <div class="homeCardTop">
        <h6 class="newTitleSize">猜你喜欢</h6>
      </div>
      <div class="homeCardCenter allUseList">
        <div class="cardAppInfo myOtherList relative allUseWidth">
          <div
            data-v-5dcf8bb7
            class="cardAppItemBox"
            style="width:200px;display:inline-block"
            v-for="(item,index) in listData"
            :key="index"
          >
            <div data-v-5dcf8bb7 class="cardAppItemNew">
              <div data-v-5dcf8bb7 class="CATNTop">
                <h6 data-v-5dcf8bb7>{{item.name}}</h6>
              </div>
              <ul data-v-5dcf8bb7 class="CATNCenter">
                <li data-v-5dcf8bb7>
                  <span data-v-5dcf8bb7>点赞量</span>
                  <em data-v-5dcf8bb7>{{item.great}}</em>
                </li>
                <li data-v-5dcf8bb7>
                  <span data-v-5dcf8bb7>收藏量</span>
                  <em data-v-5dcf8bb7>{{item.atten}}</em>
                </li>
                <li data-v-5dcf8bb7>
                  <span data-v-5dcf8bb7>访问量</span>
                  <em data-v-5dcf8bb7>{{item.access}}</em>
                </li>
              </ul>
              <ul data-v-5dcf8bb7 class="CATNBottom">
                <li data-v-5dcf8bb7>
                  <em data-v-5dcf8bb7>点赞</em>
                  <!---->
                </li>
                <li data-v-5dcf8bb7 class="CATNBLine"></li>
                <li data-v-5dcf8bb7>
                  <em data-v-5dcf8bb7>收藏</em>
                  <!---->
                </li>
                <li data-v-5dcf8bb7 class="CATNBLine"></li>
                <li data-v-5dcf8bb7>
                  <em data-v-5dcf8bb7>申请</em>
                  <!---->
                  <!---->
                </li>
                <li data-v-5dcf8bb7 class="CATNBLine"></li>
                <li data-v-5dcf8bb7>
                  <em data-v-5dcf8bb7>详情</em>
                </li>
              </ul>
            </div>
            <!---->
            <!---->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { testData } from "@/api/index";

export default {
  name: "Index",
  data() {
    return {
      loading: false,
      isShow: false,
      listData: []
    };
  },

  created() {
    this.getTestData();
  },
  methods: {
    async getTestData() {
      try {
        this.loading = true;
        const {
          data: { content }
        } = await testData({
          bizindex: "workbenchService.appshopQueryListCombine",
          params: [
            {
              pageInfo: {
                index: 0,
                size: 5
              },
              sorts: [
                {
                  column: "APPLY",
                  sort: "DESC"
                },
                {
                  column: "ACCESS",
                  sort: "DESC"
                }
              ]
            }
          ],
          r: 0.9636313988340954
        });
        this.loading = false;
        this.listData = content;
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    }
  }
};
</script>
