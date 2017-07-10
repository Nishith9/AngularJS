var app = angular.module("ContactApp",[])
app.controller("ContactCtrl", ContactCtrl);

function ContactCtrl() {
	this.contacts = [
		{"gender" : "male",
			"name" : {
				"title" : "mr",
				"first" : "aristóteles",
				"last" : "de souza"
					},
			"location" : {
				"street" : "9836 rua santa rita ",
				"city" : "lauro de freitas",
				"state" : "paraíba",
				"postcode" : 46081
						},
			"email" : "aristóteles.desouza@example.com",
			"login" : {
				"username" : "orangegoose606",
				"password" : "glow",
				"salt" : "uhTxuuAV",
				"md5" : "b2274728ab35ecfe84a7707bab517e25",
				"sha1" : "1dc36754038766850c25e36d49735d1be05cad85",
				"sha256" : "271e2127bb641a983156b2443450018006af6b3614bc4d5d430b02019933f7c4"
					},
			"dob" : "1957-10-24 11:50:48",
			"registered" : "2005-06-06 00:34:12",
			"phone" : "(13) 6784-9917",
			"cell" : "(17) 5867-1200",
			"id" : {
				"name" : "",
				"value" : null
					},
			"picture" : {
				"large" : "https://randomuser.me/api/portraits/men/51.jpg",
				"medium" : "https://randomuser.me/api/portraits/med/men/51.jpg",
				"thumbnail" : "https://randomuser.me/api/portraits/thumb/men/51.jpg"
					}
		},
		{
			"gender":"female",
			"name":
			{
				"title":"ms","first":"rebekka","last":"berger"
			},
			"location":
			{"street":"5731 rosenstraße","city":"merzig-wadern","state":"saarland","postcode":24502},
			"email":"rebekka.berger@example.com",
			"phone":"0918-8997489","cell":"0173-1740797",
			"id":{"name":"","value":null},
			"picture":{"large":"https://randomuser.me/api/portraits/women/61.jpg",
				"medium":"https://randomuser.me/api/portraits/med/women/61.jpg",
				"thumbnail":"https://randomuser.me/api/portraits/thumb/women/61.jpg"}
		},
			{
				"gender" : "male",
				"name" : {
					"title" : "mr",
					"first" : "luukas",
					"last" : "perko"
				},
				"location" : {
					"street" : "4304 satakennankatu",
					"city" : "nurmijärvi",
					"state" : "pirkanmaa",
					"postcode" : 70527
				},
				"email" : "luukas.perko@example.com",
				"login" : {
					"username" : "lazytiger998",
					"password" : "xxxxxxxx",
					"salt" : "WxLKgcOp",
					"md5" : "63503b426a6561530bbb6b7d73620225",
					"sha1" : "cfa6c2e7e2bde018617840ac450804587ba20dbd",
					"sha256" : "9164fc7ae469c764ac06d4e24d88de51141fd02c59c78ee1c24dcdc5759fed08"
				},
				"dob" : "1986-05-05 19:09:39",
				"registered" : "2014-12-14 10:19:15",
				"phone" : "08-671-106",
				"cell" : "040-969-27-17",
				"id" : {
					"name" : "HETU",
					"value" : "586-691H"
				},
				"picture" : {
					"large" : "https://randomuser.me/api/portraits/men/83.jpg",
					"medium" : "https://randomuser.me/api/portraits/med/men/83.jpg",
					"thumbnail" : "https://randomuser.me/api/portraits/thumb/men/83.jpg"
				},
				"nat" : "FI"
			},
			{"gender":"male","name":{"title":"mr","first":"chester","last":"bates"},"location":{"street":"4954 hogan st","city":"australian capital territory","state":"victoria","postcode":7134},"email":"chester.bates@example.com","login":{"username":"tinykoala736","password":"turkey","salt":"s2gFu0X6","md5":"b5761d687a08995a3873f396acf24691","sha1":"34ed67291d0ea3d52a71a0dc069b62424bf1cc6b","sha256":"a94811b0038d67b9c2e2c225a66c0416be0800d2f1c967b13579252817d2e762"},"dob":"1963-02-21 16:18:56","registered":"2011-03-09 14:34:20","phone":"00-0016-7797","cell":"0455-515-782","id":{"name":"TFN","value":"931489756"},"picture":{"large":"https://randomuser.me/api/portraits/men/1.jpg","medium":"https://randomuser.me/api/portraits/med/men/1.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/1.jpg"}
			}
			];
}