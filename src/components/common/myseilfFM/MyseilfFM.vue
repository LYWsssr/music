<template>
  <div class="myseilffm">
      <h1 style="fontSize:22px;fontWeight:bold;textAlign:center;marginTop:20px">私人FM</h1>
      <div class="data">
				<div class="befor" @click="changmusic(0)">
					<span style="cursor: pointer;">
				     <i class="el-icon-caret-left" style="font-size: 100px; color: #409EFF;"></i>
				   </span>
				</div>
        <img :src="musicMenu.al.picUrl" alt="" style="width: 400px; height: 400px; border-radius: 10px;">
				<div class="next" @click="changmusic(1)">
					<span style="cursor: pointer;">
             <i class="el-icon-caret-right" style="font-size: 100px; color: #409EFF;"></i>
           </span>
				</div>
      </div>
  </div>
</template>

<script>
import {getFM} from 'network/fm'
import { getMusicUrl,getMusicMenu } from "network/home";
import {NOW_MUSICMENU, NOW_MUSIC} from '@/store/mutationType'
export default {
    name:"MyseilfFM",
    data() {
      return {
        fmlist:[],
				musicUrl:'',
				musicMenu:'',
				showNodata:true,
				coverimg:'',
				fmindex:0
      }
    },
    mounted() {
      this.getfm()
			this.islogin()
    },
    methods: {
			changmusic(isadd) {
        if (isadd) {
          if (this.fmlist.length-1 > this.fmindex) {
            this.fmindex++
            this.getfm()
          }else {
            // return false
          }
        }else {
          if(this.fmindex) {
            this.fmindex--
            this.getfm()
          }
          
        }
				
			},
			islogin() {
				if (window.localStorage.getItem("currentUserInfo")) {
					this.showNodata = false
				}
			},
      getfm() {
        return getFM().then(res => {
          this.fmlist = res.data
          console.log(this.fmlist)
					const index = this.fmindex
					this.getMusicUrl(res.data[index].id)
					this.getMusicMenu(res.data[index].id)
        })
      },
			getMusicUrl(id){
			    getMusicUrl(id).then(res => {
			        // console.log(res.data[0]);
			        this.musicUrl = res.data[0].url;
			        this.$store.commit(NOW_MUSIC,this.musicUrl);
			        // console.log(this.musicUrl);
			    })
			},
			getMusicMenu(id){
			    getMusicMenu(id).then(res =>{
			        // console.log(res);
			        this.musicMenu = res.songs[0];
			        this.$store.commit(NOW_MUSICMENU,this.musicMenu);
			        console.log(this.musicMenu);
			    })
			}
    }
}
</script>

<style scoped>
.data {
	/* text-align: center; */
	margin-top: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>