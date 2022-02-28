
<template>
  <div class="register2">
  <div>
     <h4>สถานประกอบการ/สถานประกอบการ)</h4>
  </div>
    <div class="container">
    <h1 class="well">Registration Form</h1>
	<div class="col-lg-12 well">
	<div class="row">
				<form>
					<div class="col-sm-12">
						<div class="row">
							<div class="col-sm-7 form-group">
								<label>Username</label>
                  <input 
                   type="text" 
                   Value= ""
                   name=username
                   v-model="username" 
                   placeholder="กรอกชื่อผู้ใช้.."
                   class="form-control">
               </div>
                <div class="col-sm-7 form-group">
                  <label>Password</label>
								<input 
                  Value= ""
                  name=password
                  v-model="password"
                  placeholder="กรอกรหัสผ่าน.."
                  class="form-control"> 
                </div>
                <div class="col-sm-7 form-group">
                  <label>Confirm Password</label>
								<input 
                  Value= ""
                  name=confirm_password
                  v-model="confirm_password"
                  placeholder="กรอกรหัสผ่านอีกครั้ง.."
                  class="form-control"> 
                </div>
							
						
						</div>					
					</div>
				</form> 
				</div>
	</div>
	</div>

<div class="container">
    <h1 class="well">Registration Form</h1>
	<div class="col-lg-12 well">
	<div class="row">
				<form>
					<div class="col-sm-12">
						<div class="row">
							<div class="col-sm-5 form-group">
								<label>First Name</label>
                  <input 
                   type="text" 
                   Value= ""
                   name = name
                   v-model="name" 
                   placeholder="กรอกชื่อ.."
                   class="form-control">
               </div>
                <div class="col-sm-5 form-group">
                  <label>Last Name</label>
								<input 
                  type="text" 
                  Value= ""
                  name = lastname
                  v-model="lastname" 
                  placeholder="กรอกนามสกุล.."
                  class="form-control"> 
                </div>
                <div class="col-sm-4 form-group">
                   <label>Logo</label>
                    <input 
                      class="form-control" 
                      id="formFileLg" 
                      type="file"
                      name= employer_logo />
                    <div class="small text-muted mt-2">อัพโหลดโลโก้บริษัท..</div>  
                </div>
                  <div class="col-sm-7 form-group">
                  <label>Company name</label>
								<input 
                  type="text" 
                  Value= ""
                  name = employer_employer
                  v-model="employer_employer" 
                  placeholder="กรอกชื่อบริษัท.."
                  class="form-control"> 
                </div>
                  <div class="col-sm-4 form-group">
                   <label>Company copy</label>
                    <input 
                      class="form-control" 
                      id="formFileLg" 
                      type="file"
                      name= employer_certifed />
                    <div class="small text-muted mt-2">อัพโหลดเอกสารสำเนาจดใบทะเบียนรับรอง..</div>  
                </div>
                  <div class="col-sm-7 form-group">
                  <label>Company name</label>
                    <input 
                      type="text" 
                      Value= ""
                      name =employer_website
                      v-model="employer_website" 
                      placeholder="เว็บไซต์บริษัท.."
                      class="form-control"> 
                </div>
                  <div class="col-sm-5 form-group">
                  <label>Email</label>
								<input 
                    type="text" 
                    Value= ""
                    name =employer_email
                    v-model="employer_email" 
                    placeholder="อีเมล.."
                    class="form-control"> 
                </div>
                  <div class="col-sm-5 form-group">
                  <label>Telephone Number</label>
								<input 
                    type="text" 
                    Value= ""
                    name =employer_phone
                    v-model="employer_phone" 
                    placeholder="เบอร์โทรศัพท์.."
                    class="form-control"> 
                </div>
                  <div class="col-sm-4 form-group">
                   <label>Company photo</label>
                    <input 
                      class="form-control" 
                      id="formFileLg" 
                      type="file"
                      name= employer_photo />
                    <div class="small text-muted mt-2">อัพโหลดรูปถ่ายหน้าบริษัท..</div>  
                </div>
                  <div class="col-sm-7 form-group">
							<label>Address</label>
							<textarea 
                Value= ""
                name = number
                v-model="number" 
                placeholder="ที่อยู่ปัจจุบัน.."
                rows="4" 
                class="form-control">
               </textarea>
						</div>
              <div class="col-sm-4 form-group">
                <label>Province</label>
                  <select class="form-control" v-model="province" name = province>
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
                <label>ZIP</label>
                  <b-form-input 
                    class="form-control"
                    Value= ""
                    name = postalcode
                    v-model="postalcode" 
                    placeholder="รหัสไปรษณีย์ที่อยู่ปัจจุบัน.."> 
                  </b-form-input>
            </div>
						</div>					
					</div>
				</form> 
				</div>
	</div>
	</div>
<div class="container">
    <h1 class="well">ข้อมูลประกาศรับสมัครงาน</h1>
	<div class="col-lg-12 well">
	<div class="row">
				<form>
					<div class="col-sm-12">
						<div class="row">
              <div class="col-sm-6 form-group">
                 <label>Business type</label>
                  <select class="form-control" v-model="recruit_business1" name = recruit_business1>
                    <option>สายอาชีพ..</option>
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
                  <div class="col-sm-5 form-group">
                    <label>Job title</label>
                      <b-form-input 
                        class="form-control"
                        name = recruit_position1
                        v-model="recruit_position1" 
                        placeholder="ตำแหน่งงานที่ต้องการ.."> 
                      </b-form-input>
                    </div>
              <div class="col-sm-3 form-group">
                <h6>Educational level</h6>
                  <select class="form-control" v-model="recruit_education" name = recruit_education>
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
                Value= ""
                name = recruit_language1
                v-model="recruit_language1" 
                placeholder="ทักษะภาษา.."
                rows="4" 
                class="form-control">
               </textarea>
						</div>
              <div class="col-sm-5 form-group">
							<label>Computer skills</label>
							<textarea 
                Value= ""
                name = recruit_computer1
                v-model="recruit_computer1" 
                placeholder="ทักษะคอมพิวเตอร์.."
                rows="4" 
                class="form-control">
               </textarea>
						</div>
              <div class="col-sm-4 form-group">
                      <label>Handicapped Type</label>
                        <select class="form-control" v-model="dp" name = dp>
                          <option>ประเภทความพิการที่ต้องการ</option>
                          <option value="1">ความพิการทางการเห็น</option>
                          <option value="2">ความพิการทางการได้ยินหรือสื่อความหมาย</option>
                          <option value="3">ความพิการทางการเคลื่อนไหวหรือทางร่างกาย</option>
                          <option value="4">ความพิการทางจิตใจหรือพฤติกรรม หรือออทิสติก</option>
                          <option value="5">ความพิการทางสติปัญญา</option>
                          <option value="6">ความพิการทางการเรียนรู้</option>
                        </select>
                      </div>       
                  <div class="col-sm-4 form-group">
                    <label>Income</label>
                      <select class="form-control" v-model="resume_lncme2" name = resume_lncme2>
                        <option>รายได้ที่ต่อเดือน..</option>
                        <option value="1">9000-12000</option>
                        <option value="2">12000-15000</option>
                        <option value="3">15000-20000</option>
                        <option value="4">20000+</option>
                      </select> 
                        <div class="small text-muted mt-2">รายได้ที่ต่อเดือนต่อ</div>  
                  </div> 
                    <div class="col-sm-4 form-group">
                      <label>Job vacancies</label>
                        <select class="form-control" v-model="recruit_blank1" name = recruit_blank1>
                          <option>ตำแหน่งงานที่ว่าง</option>
                          <option value="1" name = recruit_blank1 >1</option>
                          <option value="2" name = recruit_blank1 >2</option>
                          <option value="3" name = recruit_blank1 >3</option>
                          <option value="4" name = recruit_blank1 >4</option>
                          <option value="5" name = recruit_blank1 >5</option>
                          <option value="6" name = recruit_blank1 >6</option>
                        </select>
                  </div>
                    <div class="col-sm-6 form-group">
							<label>Job description</label>
							<textarea 
                Value= ""
                name = recruit_detail
                v-model="recruit_detail" 
                placeholder="รายละเอียดงาน.."
                rows="5" 
                class="form-control">
               </textarea>
						</div>
              <div class="col-sm-6 form-group">
							<label>Workplace</label>
							<textarea 
                Value= ""
                name = recruit_atwork
                v-model="recruit_atwork" 
                placeholder="สถานที่ปฎิบัติงาน.."
                rows="5" 
                class="form-control">
               </textarea>
						</div>
              <div class="col-sm-6 form-group">
							<label>Welfare</label>
							<textarea 
                Value= ""
                name = recruit_welfare1
                v-model="recruit_welfare1" 
                placeholder="สวัสดิการ.."
                rows="5" 
                class="form-control">
               </textarea>
						</div>
              <div class="col-sm-6 form-group">
							<label>Job Applicant Qualifications</label>
							<textarea 
                Value= ""
                name = recruit_class
                v-model="recruit_class" 
                placeholder="คุณสมบัติผู้สมัครงาน.."
                rows="5" 
                class="form-control">
               </textarea>
						</div>
                     <div>
  
</div>
						</div>	
					</div>
				</form> 
		</div>
	</div>
  <b-button  @click="register">ยืนยัน</b-button>
	</div>

  </div>
</template>

<script>
import axios from "axios"


export default {
  name: 'register2',
  components: {
   
  },
  data (){
    return{
      username: "",
      password: "",
      confirm_password: "",
      name: "",
      lastname: "",
      employer_employer: "",
      employer_logo: "",
      employer_photo: "",
      employer_certifed: "",
      employer_website: "",
      employer_email: "",
      employer_phone: "",
      employer_detail: "",
      number: "",
      province: "",
      postalcode: "",
      status: "",
      recruit_business1: "",
      recruit_position1: "",
      recruit_language1: "",
      recruit_computer1: "",
      recruit_dp: "",
      recruit_lncme1: "",
      recruit_blank1: "",
      recruit_welfare1: "",
      recruit_atwork: "",
      recruit_detail: "",
      recruit_class: "",
      recruit_education: "",
    };
  },
  methods: {
    register() {
      let uri = "http://localhost:3000/user/register";
      if (this.confirm_password === this.password){
        axios
        .post(uri, {
          type: 'employer',
          username: this.username,
          password: this.password,
          name: this.name,
          lastname: this.lastname,
          employer_employer: this.employer_employer,
          employer_logo: this.employer_logo,
          employer_photo: this.employer_photo,
          employer_certifed: this.employer_certifed,
          employer_website: this.employer_website,
          employer_email: this.employer_email,
          employer_phone: this.employer_phone,
          employer_detail: this.employer_detail,
          number: this.number,
          province: this.province,
          postalcode: this.postalcode,
          status: this.status,
          recruit_business1: this.recruit_business1,
          recruit_position1: this.recruit_position1,
          recruit_language1: this.recruit_language1,
          recruit_computer1: this.recruit_computer1,
          recruit_dp: this.recruit_dp,
          recruit_lncme1: this.recruit_lncme1,
          recruit_blank1: this.recruit_blank1,
          recruit_welfare1: this.recruit_welfare1,
          recruit_atwork: this.recruit_atwork,
          recruit_detail: this.recruit_detail,
          recruit_class: this.recruit_class,
          recruit_education: this.recruit_education,
          
        })
        .then(res => {
  
          if (res.data.status.code === 0) {
            
            alert("สำเร็จ  >>");
            this.$router.push("/");
          }
          else
           alert("username ซ้ำ  >>");
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
      } else {
        alert("password ไม่ตรง  >>");
      }
      
    }
  }
}
</script>

