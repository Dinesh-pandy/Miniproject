package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Appliance {
	@Id
		private String gmail;
		private String name;
		private Long mobno;		
		private String password;


		public Appliance() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		public String getname() {
			return name;
		}
		public void setname(String name) {
			this.name = name;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getGmail() {
			return gmail;
		}
		public void setGmail(String gmail) {
			this.gmail = gmail;
		}
		public long getMobno() {
			return mobno;
		}
		public void setMobno(Long mobno) {
			this.mobno = mobno;
		}
		public Appliance(String name, String password, String gmail, Long mobno) {
			super();
			this.name = name;
			this.gmail = gmail;
			this.mobno = mobno;
			this.password = password;
		}
	}
