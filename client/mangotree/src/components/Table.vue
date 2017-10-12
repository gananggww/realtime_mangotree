<template>
  <div class="">
    <table class="ui very basic collapsing celled table">
      <thead>
        <tr><th>Keterangan</th>
        <th>Hasil</th>
      </tr></thead>
      <tbody>
        <tr>
          <td>
            <h4 class="ui image header">
              <div class="content">
                Tinggi
                <div class="sub header">Tinggi Pohon dalam setiap pertumbuhannya
              </div>
            </div>
          </h4></td>
          <td>
            {{mango_tree._height}} meter
          </td>
        </tr>
        <tr>
          <td>
            <h4 class="ui image header">
              <div class="content">
                  Age
                <div class="sub header">Pertumbuhan umur pohon
              </div>
            </div>
          </h4></td>
          <td>
            {{mango_tree._age}} Tahun
          </td>
        </tr>
        <tr>
          <td>
            <h4 class="ui image header">
              <div class="content">
                Status
                <div class="sub header">Status kesehatan pohon
              </div>
            </div>
          </h4></td>
          <td v-if="mango_tree.healthyStatus">
            Sehat
          </td>
          <td v-else>Mati</td>
        </tr>
        <tr>
          <td>
            <h4 class="ui image header">
              <div class="content">
                Panen
                <div class="sub header">Silahkan dihabiskan keburu dimakan codot
              </div>
            </div>
          </h4></td>
          <td>
            {{mango_tree._harvested}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  firebase: function () {
    return {
      mango_tree: {
        source: this.$db.ref('tree'),
        asObject: true
      }
    }
  }
}
</script>

<style lang="css">
</style>
