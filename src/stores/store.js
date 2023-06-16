import { createStore } from 'vuex'
import axios from 'axios';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      requestId :'',
      currentImageName: 'Input Image',
      currentImageSrc: '',
      imgSrc: '',
      tagList: [],
      openModal: false,
      filedata: {},
      tagID :'result',
      myImageNumber: '1',
      first: '',
      second: '',
      myTagNumber: '1',
    }
  },
  mutations: {
    setRequestId(state, requestId){
      state.requestId = requestId
    },
    setUploadImage(state, uploadImage){
      state.uploadImage = uploadImage
    },
    setMyTagNumber(state, myTagNumber){
      state.myTagNumber = myTagNumber
    },
    setMy(state,first,second){
      state.first = first
      state.second = second
    },
    setMyImageNumber(state, myImageNumber){
      state.myImageNumber = myImageNumber
    },
    setTagID(state, tagID){
      state.tagID = tagID
    },
    setFileData(state, filedata){
      state.filedata = filedata
    },
    setImgSrc(state, imgSrc){
      state.imgSrc = imgSrc
    },
    setOpenModal(state,current){
      state.openModal = current;
    },
    setCurrentImageName(state, imageName){
      state.currentImageName = imageName
    },
    setCurrentImageSrc(state, imageSrc){
      state.currentImageSrc = imageSrc
    },
    setTagList(state, tagList){
      state.tagList = tagList
    }
  },
  actions:{
    getTagList(context){
      axios.get('http://35.78.234.130:8081/demo/tag').then((response) => {
          context.commit('setTagList', response.data)
          console.log(response.data)
          }
        ).catch((error) => {
          console.log(error)
          }
        ) 
      },
    async postImageUpload(context){
        const formData = {
          imgFile : context.state.filedata,
          // userId : '1'
        }
        const frm = Object.entries(formData).reduce((acc, [key, value]) => {
          acc.append(key, value);
          return acc;
        }, new FormData());
        try{
          const response = await axios.post(
            'http://3.39.22.13:8080/image/upload',
            frm
          )
          console.log(response.data)
          context.commit('setRequestId', response.data)
          return true
        } catch(error){ 
          console.log(error)
          return false
        }
      },
      async getTagStatus(context){
        const response = await axios.get(`http://3.39.22.13:8080/tag/status/${context.state.requestId}`)
        return response.data
      }
    }
  }
)


export default store