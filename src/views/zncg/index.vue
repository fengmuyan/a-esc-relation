<template>
  <div class="zncg" :style="{width:`${clientWidth}px`,height:`${screeHeight}px`}">
    <div class="zncg_box">
      <div class="zncg_header">
        <form>
          <table cellspacing="0" cellpadding="0" width="100%" border="0">
            <tr>
              <td width="171">
                <div>
                  日期：
                  <span>2020.07.26</span>
                </div>
              </td>
              <td width="99">
                <div>
                  <input type="checkbox" name class="check" />已办毕
                </div>
              </td>
              <td width="311">
                <div>
                  统计时间：
                  <input type="text" name class="inp86" /> -
                  <input type="text" name class="inp86" />
                </div>
              </td>
              <td width="178">
                <div>
                  批次编号：
                  <input type="text" name class="inp86" />
                </div>
              </td>
              <td width="231">
                <div>
                  项目单位：
                  <input type="text" name class="inp86" />
                </div>
              </td>
              <td width="210">
                <div>
                  <button type="button" class="query">查询</button>
                  <button type="button" class="Aiquery">智能查询</button>
                </div>
              </td>
              <td width="89">
                <div>
                  <input type="checkbox" name class="check" />运营监控
                </div>
              </td>
              <td>
                <div>
                  <input type="checkbox" name class="check" />合规监控
                </div>
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div class="zncg_content">
        <a
          class="ndxq zncg_hover"
          @mouseenter="switchShow('ndxqInfos')"
          @mouseleave="switchHide('ndxqInfos')"
        ></a>
        <div
          class="zncg_ndxq_infos zncg_pop"
          @mouseenter="switchShow('ndxqInfos')"
          @mouseleave="switchHide('ndxqInfos')"
          v-show="ndxqInfos"
        >
          <div class="mask"></div>
          <p>
            <a href="#">年度需求预测分析</a>
          </p>
          <p>
            <a href="#">省公司计划批次智能安排</a>
          </p>
        </div>

        <a
          class="kb zncg_hover"
          @mouseenter="switchShow('kbInfos')"
          @mouseleave="switchHide('kbInfos')"
        ></a>
        <div
          class="zncg_kb_infos zncg_pop"
          @mouseenter="switchShow('kbInfos')"
          @mouseleave="switchHide('kbInfos')"
          v-show="kbInfos"
        >
          <div class="mask"></div>
          <p>
            <a href="#">应否未否监控</a>
          </p>
          <p>
            <a href="#">开标行为监控</a>
          </p>
          <p>
            <a href="#">委员会组建</a>
          </p>
        </div>

        <a
          class="cp zncg_hover"
          @mouseenter="switchShow('cpInfos')"
          @mouseleave="switchHide('cpInfos')"
        ></a>
        <div
          class="zncg_cp_infos zncg_pop"
          @mouseenter="switchShow('cpInfos')"
          @mouseleave="switchHide('cpInfos')"
          v-show="cpInfos"
        >
          <div class="mask"></div>
          <p>
            <a href="#">专家评价监控</a>
          </p>
          <p>
            <a href="#">专家现场行为监控</a>
          </p>
        </div>

        <a
          class="jggs zncg_hover"
          @mouseenter="switchShow('jggsInfos')"
          @mouseleave="switchHide('jggsInfos')"
        ></a>
        <div
          class="zncg_jggs_infos zncg_pop"
          @mouseenter="switchShow('jggsInfos')"
          @mouseleave="switchHide('jggsInfos')"
          v-show="jggsInfos"
        >
          <div class="mask"></div>
          <p>
            <a href="#">公示结果监控</a>
          </p>
          <p>
            <a href="#">中标价异常监控</a>
          </p>
          <p>
            <a href="#">采购时长监控</a>
          </p>
        </div>

        <a
          class="jgfb zncg_hover"
          @mouseenter="switchShow('jgfbInfos')"
          @mouseleave="switchHide('jgfbInfos')"
        ></a>
        <div
          class="zncg_jgfb_infos zncg_pop"
          @mouseenter="switchShow('jgfbInfos')"
          @mouseleave="switchHide('jgfbInfos')"
          v-show="jgfbInfos"
        >
          <div class="mask"></div>
          <p>
            <a href="#">有效投标人少于三家评标分析</a>
          </p>
          <p>
            <a href="#">否决情况统计</a>
          </p>
          <p>
            <a href="#">流标情况统计</a>
          </p>
          <p>
            <a href="#">采购设备优质率</a>
          </p>
          <p>
            <a href="#">非招标金额监控</a>
          </p>
          <p>
            <a href="#">计划提报及时率分析</a>
          </p>
          <p>
            <a href="#">价格管控分析</a>
          </p>
          <p>
            <a href="#">澄清行为分析</a>
          </p>
          <p>
            <a href="#">智慧监督现场信息统计</a>
          </p>
          <p>
            <a href="#">服务框架释放情况监控</a>
          </p>
          <p>
            <a href="#">投标保证金退还监控</a>
          </p>
        </div>

        <a
          class="kjxy zncg_hover"
          @mouseenter="switchShow('kjxyInfos')"
          @mouseleave="switchHide('kjxyInfos')"
        ></a>
        <div
          class="zncg_kjxy_infos zncg_pop"
          @mouseenter="switchShow('kjxyInfos')"
          @mouseleave="switchHide('kjxyInfos')"
          v-show="kjxyInfos"
        >
          <div class="mask"></div>
          <p>
            <a href="#">框架协议需求预测分析</a>
          </p>
        </div>
      </div>
      <div class="zncg_footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zncg",
  data() {
    return {
      clientWidth: document.documentElement.clientWidth,
      screeHeight: document.documentElement.clientHeight,
      ndxqInfos: false,
      kbInfos: false,
      cpInfos: false,
      jggsInfos: false,
      jgfbInfos: false,
      kjxyInfos: false
    };
  },
  methods: {
    //鼠标移入显示弹出层
    switchShow(item) {
      this[item] = true;
    },

    //鼠标移入隐藏弹出层
    switchHide(item) {
      this[item] = false;
    }
  }
};
</script>