<template>
  <v-card>
    <v-card-title>
      <div class="header">
        <p class="header-title">{{uiContent.HOME_TITLE}} <span class="carita"><span class="manitos">ლ</span>(╹◡╹<span class="manitos">ლ</span>)</span></p>
      </div>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        :label="uiContent.HOME_SEARCH_GENRE_LABEL"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="genres"
      :search="search"
      :rows-per-page-items="[300]"
      :disable-initial-sort="true"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
          <a class="genre-link" :href="`${baseNetflixUrl}${props.item.genreId}`" target="_blank">
            <p class="genre-name">{{ props.item.name }}</p>
          </a>
        </td>
        <td class="text-xs-right">
          <a class="genre-link" :href="`${baseNetflixUrl}${props.item.genreId}`" target="_blank"><v-icon color="green darken-2">videocam</v-icon></a>
        </td>
      </template>
      <v-alert slot="no-results" :value="true" color="purple darken-2" icon="warning">
        <p class="header-title">{{uiContent.HOME_SEARCH_FAILURE.with(search)}}<span class="carita"> (<span class="manitos">╯</span>°□°)<span class="manitos">╯</span>︵<span class="mesita"> ┻━┻</span></span></p>
      </v-alert>
      <template v-slot:no-data>
        <v-alert :value="true" type="error" color="red darken-2" icon="warning">
          <p class="header-title">{{uiContent.HOME_NO_DATA}}<span class="carita"><span class="manitos">ლ</span>(ಠ益ಠ<span class="manitos">ლ</span>)</span></p>
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from 'axios'

const {
  VUE_APP_BASE_NETFLIX_GENRE_URL,
  VUE_APP_API_URL
} = process.env

export default {
  name: 'Main',
  props: {
    uiContent: {
      type: Object,
      required: true
    }
  },
  created () {
    const url = `${VUE_APP_API_URL}genres`
    axios.get(url)
      .then(response => {
        const { data } = response
        this.genres = data
      })
      .catch(() => {
        // eslint-disable-next-line
        console.error('Server down =(')
        this.genres = []
      })
  },
  data () {
    return {
      baseNetflixUrl: VUE_APP_BASE_NETFLIX_GENRE_URL,
      search: '',
      headers: [
        {
          text: this.uiContent.HOME_COLUMN_TITLE_GENRE,
          align: 'left',
          sortable: true,
          value: 'name',
          width: '90%'
        },
        {
          text: this.uiContent.HOME_COLUMN_TITLE_LINK,
          align: 'right',
          sortable: false,
          value: 'link',
          width: '10%'
        }
      ],
      genres: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

                              /* v.._                       _..v
                               )\ '-.                 .-' /(
                               : \   :               :   / :
                                '.\   '.    ._.    .''  /.'
                                  :\    i.-'   '-.i    /:
                                   '\ .-'         '-. /'
_..eeaa.._                          :                :                          _..eeaa.._
i"T$P^T888aaa.._                   /   .-'\. ./'-.   \                    _..eee8887^T$P"i
'.     "T888888aa.               /   /  ()/ \()  \   \                .ee8888887"     .'
  '      '"T8888.88a            :    '._.' . '._.'    :             e88.88887"'      '
  i           "T8888a.          | .i'     / \     'i. |          .e8888P"           i
  :             "T8888a.        |  '.     '-'     .'  |        .e88867"             :
   i               T8888a.      :    i__..-=-..__i    :      .e8888P               i
  :                "T8888a.     '.   \/       \/   .'     .e8888P"                :
  :                  "88888a.     i-.           .-i     .e88888"                  :
  i                  "T88888a._./   '-..___..-'   \._.e88888P"                  i
  :                     "T88888P                   Y88888P"                     :
  :                       'T88"                     "88P'                       :
  i                    .__.:                         :.__.                    i
  :               _.--'   :                           :   '--._               :
  :         _.--'        |          C A M B A         |        '--._         :
  i___...--'             :            2018           :             '--...___i
                          :                         :
                          '.                       .'
                           '.                     .'
                             ''                 .' .
                              Y'-..         ..-'Y
                             :     '-.___.-'     :
                             |      .'87"'.      |
                             :     :  ^.   :     :
                              :   :   "^.   :   :        ._.
                              |   |    "^.  |   |        )&(
                              :   :      "'e:   :    .aP" ^
                               : :           : : "TP"
                               | |           | |
                               : :           : :
                              /   )         (   \          fsc
                           _.'   /           \   '._
                         .' _ . /             \     '.
                        (_i-i/_i               i_\i-i_)                                */

.header img {
  display: block;
  margin-bottom: 5px;
}
.header {
  position: relative;
  display: block;
}
.carita {
  font-weight: bolder;
}
.manitos {
  animation: MoveUpDown 1s linear infinite;
  position: relative;
  left: 0;
  bottom: 0;
}

.mesita {
  animation: MoveUpDown 1s linear infinite;
  position: relative;
  left: 0;
  bottom: 0;
}

.header-title {
  font-size: 25px;
}

.genre-name {
  font-size: 20px;
}

.genre-link {
  text-decoration: none;
}

@keyframes MoveUpDown {
  0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: 5px;
  }
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

p {
  margin: 0;
}

</style>
