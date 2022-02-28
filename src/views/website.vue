<template>
  <div class="website">
    <div>
  <div class="container">
     <h1 class="well">personal information</h1>
     <div class="col-lg-12 well">
       <div class="row">
         <form>
           <div class="col-sm-12">
             <div class="row">
               <div class="col-sm-6 form-group">
                 <label>First Name </label>
                 <input 
                   type="text" 
                   disabled value= " "
                   name = name
                   v-model="name" 
                   class="form-control">
               </div>
                <div class="col-sm-6 form-group">
                  <label>Last Name</label>
								<input 
                  type="text" 
                  disabled value= ""
                  name = lastname
                  v-model="lastname" 
                  class="form-control"> 
                </div>
                <div class="col-sm-4 form-group">
                 <label>Age</label>
                 <input 
                    type="text" 
                    disabled value= ""
                    name=age
                    v-model="age"
                    placeholder="อายุ.."
                    Value.length=""
                    class="form-control">
               </div>
                <div class="col-sm-4 form-group">
                  <label>Sex</label>
                  <select v-model="sex" disabled value ="" class="form-control">
  <!-- <option disabled value="">Please select one</option> -->
                    <!-- <select class="form-control" name = sex> -->
                      <!-- <option>โปรดเลือกเพศ..</option> -->
                      <!-- <option value="1" name = sex1 >ชาย</option> -->
                      <option value="men">ชาย</option>
                      <!-- <option value="2" name = sex2 >หญิง</option> -->
                      <option value="g">หญิง</option>
                    </select>
                </div>
                <div class="col-sm-4 form-group">
                 <label for="dob">Date Of Birth *</label>
		<input type="date" 
    name="birthday" 
    id="dob"
    disabled value = ""
    v-model="birthday"       
    class="form-control">
		<span id="error_dob" class="text-danger"></span>			
  </div>
              <div class="col-sm-3 form-group">
                 <label>Height</label>
                 <input 
                    type="text" 
                    disabled value= ""
                    name=height
                    v-model="height"
                    placeholder="ส่วนสูง.."
                    Value.length=""
                    class="form-control">
               </div>
                <div class="col-sm-3 form-group">
                  <label>Weight</label>
								<input 
                    type="text" 
                    disabled value= ""
                    name=weight
                    v-model="weight"
                    placeholder="น้ำหนัก.."
                    Value.length=""
                    class="form-control"> 
                </div>
                <div class="col-sm-3 form-group">
                  <label>Nationality</label>
								<input 
                    type="text" 
                    disabled value= ""
                    name=nationality
                    v-model="nationality"
                    placeholder="สัญชาติ.."
                    Value.length=""
                    class="form-control"> 
                </div>
                <div class="col-sm-3 form-group">
                  <label>Religion</label>
								<input 
                    type="text" 
                    disabled value= ""
                    name = religion
                    v-model="religion" 
                    placeholder="ศาสนา.."
                    class="form-control"> 
                </div>
                <div>
                 <!-- <div class="col-sm-3 form-group">
                   <label>Applicant card</label>
                    <input 
                      disabled value =""
                      class="form-control" 
                      id="formFileLg" 
                      type="file"
                      name= applicant_card />
                    <div class="small text-muted mt-2">อัพโหลดรูปถ่ายบัตรผู้พิการ..</div>  
                </div> -->
                <b-form-file
      v-model="applicant_card"
      :state="Boolean(file1)"
      placeholder="อัพโหลดรูปถ่ายบัตรผู้พิการ..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
  </div>
                  <div class="col-sm-5 form-group">
                    <label>Handicapped Type</label>
                      <select class="form-control"
                              disabled value = ""
                              v-model="dp"
                              name = dp>
                        <option>ประเภทความพิการ..</option>
                        <option value="1">ความพิการทางการเห็น</option>
                        <option value="2">ความพิการทางการได้ยินหรือสื่อความหมาย</option>
                        <option value="3">ความพิการทางการเคลื่อนไหวหรือทางร่างกาย</option>
                        <option value="4">ความพิการทางจิตใจหรือพฤติกรรม หรือออทิสติก</option>
                        <option value="5">ความพิการทางสติปัญญา</option>
                        <option value="6">ความพิการทางการเรียนรู้</option>
                     </select>
                  </div>
                  <div class="col-sm-9 form-group">
							<label>Address</label>
							<textarea 
                disabled value= ""
                name = number
                v-model="number" 
                placeholder="ที่อยู่ปัจจุบัน.."
                rows="3" 
                class="form-control">
               </textarea>
						</div>
              <div class="col-sm-4 form-group">
    <h6>Province</h6>
    <select class="form-control" v-model="province" disabled value="" name = province>
      <option>จังหวัดที่อยู่ปัจจุบัน..</option>
      <option value="1">กรุงเทพมหานคร</option>
      <option value="2">นนทบุรี</option>
      <option value="3">พระนครศรีอยุธยา</option>
      <option value="4">ปทุมธานี</option>
      <option value="5">สมุทรปราการ</option>
      <option value="6">เชียงใหม่</option>
    </select>
  </div>
  <div class="col-sm-3 form-group">
    <h6>ZIP code</h6>
    <b-form-input 
    class="form-control"
    disabled value= ""
    name = postalcode
    v-model="postalcode" 
    placeholder="รหัสไปรษณีย์ที่อยู่ปัจจุบัน"> 
    </b-form-input>
  </div>
             </div>
           </div>
         </form>
       </div>
     </div>
  </div>
  

<div class="container">
    <h1 class="well">resume</h1>
	<div class="col-lg-12 well">
	<div class="row">
				<form>
					<div class="col-sm-12">
						<div class="row">
              <div class="col-sm-6 form-group">
                 <label>Career field</label>
                 <select class="form-control" disabled value ="" v-model="resume_career" name = resume_career>
      <option value="1">กฎหมาย</option>
      <option value="2">การคมนาคมขนส่ง</option>
      <option value="3">กาาค้าระหว่างประเทศ</option>
      <option value="4">การตลาด</option>
      <option value="5">การศึกษา/การฝึกอบรม</option>
      <option value="6">การเงิน</option>
      <option value="7">งานขาย</option>
      <option value="8">ไอที/คอมพิวเตอร์</option>
      <option value="9">ท่องเที่ยว งานโรงแรม</option>
      <option value="10">จัดชื้อ</option>
      <option value="11">ช่างเทคนิค</option>
      <option value="12">โฆษนา/ประชาสัมพันธ์/นิเทศศาสตร์</option>
      <option value="13">บริการลูกค้า</option>
      <option value="14">บัญชี</option>
      <option value="15">วิจัยและพัฒนา/วิทยาศาสตร์</option>
      <option value="16">มนุษยศาสตร์</option>
      <option value="17">วิศวกร</option>
      <option value="18">ศิลปกรรมศาสตร์</option>
      <option value="19">ออกแบบ/สถาปนิก</option>
      <!-- <option value="10">จัดชื้อ</option>
      <option value="10">จัดชื้อ</option> -->

    </select>
               </div>
                <div class="col-sm-6 form-group">
                  <label>Business type</label>
								<input 
                  type="text" 
                  disabled value= ""
                  name = resume_business
                  v-model="resume_business" 
                  placeholder="ประเภทธุรกิจ.."
                  class="form-control"> 
                </div>
               <div class="col-sm-3 form-group">
                   <label>Photo</label>
                    <input 
                      class="form-control" 
                      id="formFileLg" 
                      type="file"
                      disabled value =""
                      name= resume_photo />
                    <div class="small text-muted mt-2">อัพโหลดรูปถ่ายหน้าตรง..</div>  
                </div>
                <div class="col-sm-9 form-group">
							<label>Work experience</label>
							<textarea 
                disabled value= ""
                name = resume_experience
                v-model="resume_experience" 
                placeholder="ประสบการณ์ทำงาน.."
                rows="4" 
                class="form-control">
               </textarea>
						</div>
            <div class="col-sm-3 form-group">
              <h6>Educational level</h6>
                <select class="form-control" v-model="resume_education" disabled value="" name = resume_education>
                  <option>วุฒิการศึกษา</option>
                  <option value="1">ต่ำกว่า ปวช.</option>
                  <option value="2">ปริญญาตรีขึ้นไป</option>
                  <option value="3">ปริญญาโทขึ้นไป</option>
                  <option value="4">ปวช. ปวส. อนุปริญญา</option>
                </select>
            </div>
              <div class="col-sm-4 form-group">
							<label>Language skills</label>
							<textarea 
                disabled value= ""
                name = resume_language
                v-model="resume_language" 
                placeholder="ทักษะภาษา.."
                rows="4" 
                class="form-control">
               </textarea>
						</div>
              <div class="col-sm-5 form-group">
							<label>Computer skills</label>
							<textarea 
                disabled value= ""
                name = resume_computer
                v-model="resume_computer" 
                placeholder="ทักษะคอมพิวเตอร์.."
                rows="4" 
                class="form-control">
               </textarea>
						</div>
              <div class="col-sm-3 form-group">
                   <label>Project/Portfolio</label>
                    <input 
                      class="form-control" 
                      disabled value = ""
                      id="formFileLg" 
                      type="file"
                      name= resume_portfolio />
                    <div class="small text-muted mt-2">อัพโหลดผลงานโครงงาน..</div>  
                </div>
                 <div class="col-sm-4 form-group">
                  <label>Referral person</label>
								<input 
                  type="text" 
                  disabled value= ""
                  name = resume_reference
                  v-model="resume_reference" 
                  placeholder="ชื่อ-นามสกุลบุคคลอ้างอิง.."
                  class="form-control"> 
                </div>
                <div class="col-sm-4 form-group">
                  <label>Referral Phone Number</label>
								<input 
                  type="text" 
                  disabled value= ""
                  name = resume_referencep
                  v-model="resume_referencep" 
                  placeholder="เบอร์โทรศัพท์บุคคลอ้างอิง.."
                  class="form-control"> 
                </div>
                  <div class="col-sm-4 form-group">
                    <h6>Latest income</h6>
                      <select class="form-control" v-model="resume_lncme1" disabled value="" name = resume_lncme1>
                        <option>รายได้ล่าสุด</option>
                        <option value="1">9000-12000</option>
                        <option value="2">12000-15000</option>
                        <option value="3">15000-20000</option>
                        <option value="4">20000+</option>
                      </select> 
                        <div class="small text-muted mt-2">เลือกรายได้ล่าสุดต่อเดือน</div>  
                  </div> 
                    <div class="col-sm-4 form-group">
                      <h6>Income want</h6>
                        <select class="form-control" v-model="resume_lncme1" disabled value="" name = resume_lncme2>
                          <option>รายได้ที่ต้องการ</option>
                          <option value="1">9000-12000</option>
                          <option value="2">12000-15000</option>
                          <option value="3">15000-20000</option>
                          <option value="4">20000+</option>
                        </select> 
                          <div class="small text-muted mt-2">เลือกรายได้ที่ต้องการต่อเดือน</div>  
                    </div> 
                     <div>
  <b-button  @click="register">ยืนยัน</b-button>
</div>
						</div>	
					</div>
				</form> 
		</div>
	</div>
	</div>
 
    
    
   
  
  
   
 
  
  
  
  
  
  
  
 
  
  
  
  
  
  
  <div class="container">
    <b-form-input 
    class="mt-2"
    Value= ""
    name = applicant_id
    v-model="applicant_id" 
    placeholder="applicant_id"> 
    </b-form-input>
  </div>
    <form @submit.prevent="company" 
        class="login100-form validate-form">
    </form>
    </div>
      <b-button 
        class = 'fadeIn fourth zero-raduis'
        @click="company_search">เข้าสู่เว็บไซต์
      </b-button> 
    </div>
  

</template>
  
<script>
// import axios from 'axios';
import login from './login.vue';


export default {
  name: 'website',
  comments:{
    login
  },

  data (){
    return{
     
      username: "",
        
      name: "",
      lastnam:"",
      sex:"",
      age: "",
      birthday: "",
      height:"",
      weight:"",
      nationality:"",
      religion:"",
      dp:"",
      phone:"",
      facebook:"",
      email: "",
      number:"",
      province:"",
      postalcode:"",
      status:"",
      resume_id:"",
      resume_photo:"",
      resume_career:"",
      resume_business:"",
      resume_position:"",
      resume_experience:"",
      resume_education:"",
      resume_language:"",
      resume_computer:"",
      resume_portfolio:"",
      resume_reference:"",
      resume_referencep:"",
      resume_lncme1:"",
      resume_lncme2:"",
      applicant_card:"",
      applicant_id:"",
    }
  },
   methods: {},
    created() {
      console.log('createdcv')
      // let uri = "http://localhost:3000/user/fetch";
      console.log(JSON.parse(localStorage.getItem('username')))
      console.log(JSON.parse(localStorage.getItem('user')))
      const userData = JSON.parse(localStorage.getItem('user'))
      const fs = require('fs');
      const fileBuffer = fs.readFileSync('pantacodelogo.jpeg');
      const base64Image = fileBuffer.toString('base64');
      console.log('gdnngdgnf',base64Image)
      // const imageBuffer = new Buffre.from(input, 'base64');
      // fs.writeFileSync('foo.js',imageBuffer);
        console.log('userData',userData)
        this.name = userData.name
        this.lastname = userData.lastname
        this.sex = userData.sex
        this.age = userData.age
        this.birthday = userData.birthday
        this.height = userData.height
        this.weight = userData.weight
        this.nationality = userData.nationality
        this.religion = userData.religion
        this.dp = userData.dp
        this.phone = userData.phone
        this.facebook = userData.facebook
        this.email = userData.email
        this.number = userData.number
        this.province = userData.province
        this.postalcode = userData.postalcode
        this.resume_id = userData.resume_id
        this.resume_photo = userData.resume_photo
        this.resume_career = userData.resume_career
        this.resume_business = userData.resume_business
        this.resume_position = userData.resume_position
        this.resume_experience = userData.resume_experience
        this.resume_education = userData.resume_education
        this.resume_language = userData.resume_language
        this.resume_computer = userData.resume_computer
        this.resume_portfolio = userData.resume_portfolio
        this.resume_reference = userData.resume_reference
        this.resume_referencep = userData.resume_referencep
        this.resume_lncme1 = userData.resume_lncme1
        this.resume_lncme2 = userData.resume_lncme2
        this.applicant_id = userData.applicant_id
        this.applicant_card = userData.applicant_card
    

      // this.username = JSON.parse(localStorage.getItem('username'))
      // console.log('JSON.parse', this.username)

   
      // axios.post(uri,{
      //   username: this.username
      // })
      // .then(res => {
      //   console.log('resPost',res)
        
        // console.log(' axios.post',uri)
      // })
      .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });

    },
    // methods2: {
    //         async company_search() {
    //             console.log('company_search')
                
    //             let uri = "http://localhost:3000/user/fetch";
    //             axios.post(uri, {
            
    //     })
    //     .then(responsecompany => {
    //         console.log('RESPONSE API LOGIN', responsecompany)         
    //         if (responsecompany.data.status.code === 0) {
    //         alert("สำเร็จ  >>", responsecompany.data);
    //         localStorage.setItem('province', JSON.stringify(responsecompany.data))
    //         this.$router.push("/company_search")
    //     } else {
    //         alert("ผิดพลาด")
    //     }
    //     })
    //     .catch(err => {
    //     // eslint-disable-next-line no-console
    //     console.log(err);
    //     });  
        
    //     }
       
    //    },
}

</script>
