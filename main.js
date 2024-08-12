		let puzzleDifficulty,puzzleRotatable;
						
		function init() {
			setupButtons();
			initCanvas()
		}			

		function setupButtons() {
			document.getElementById('startButton').addEventListener('click',page1ClickHandler);
			var puzzleDifficulty = document.getElementsByName("puzzleDifficulty");
			for (let i=0;i<puzzleDifficulty.length;i++) {
				puzzleDifficulty[i].addEventListener('click',function(e) {
					for (let i=0;i<puzzleDifficulty.length;i++) {
						puzzleDifficulty[i].parentElement.classList.remove("qSelect");
					}
					e.target.parentElement.classList.add("qSelect");
				});
			}
			var selectRotatables = document.getElementsByName("selectRotatable");
			for (let i=0;i<selectRotatables.length;i++) {
				selectRotatables[i].addEventListener('click',function(e) {
					for (let i=0;i<selectRotatables.length;i++) {
						selectRotatables[i].parentElement.classList.remove("qSelect");
					}
					e.target.parentElement.classList.add("qSelect");
				});
			}
			var selectPicture = document.getElementsByName("selectPicture");
			for (let i=0;i<selectPicture.length;i++) {
				selectPicture[i].addEventListener('click',function(e) {
					if (e.target.value==10) {
						document.getElementById('imageInput').click();
					}
					else {
						for (let i=0;i<selectPicture.length;i++) {
							selectPicture[i].parentElement.classList.remove("iSelect");
						}
						e.target.parentElement.classList.add("iSelect");
					}
				});
			}	
			let imageInputaa = document.getElementById('imageInput');
			let previewImage = document.getElementById('picture10');
			imageInputaa.addEventListener('change', (event) => {
				const file = event.target.files[0];
				if (file) {
					const reader = new FileReader();
					reader.onload = (e) => {
						previewImage.src = e.target.result;   
						for (let i=0;i<selectPicture.length;i++) {
							selectPicture[i].parentElement.classList.remove("iSelect");
						}
						imageInputaa.parentElement.classList.add("iSelect");
					};
					reader.readAsDataURL(file);
				}
		  });

			//$('#fileInput').on('change',newFileInput);
		}	

		function page1ClickHandler(e) {
			e.preventDefault();
			var pages = document.getElementsByClassName("page");
			for (var i = 0; i < pages.length; i++) {
			   pages[i].style.display='none';
			}
			document.getElementById('canvasPage').style.display='block';
			puzzleDifficulty=document.querySelector("input[name=puzzleDifficulty]:checked").value;
			puzzleRotatable = document.querySelector("input[name=selectRotatable]:checked").value;
			puzzlePicture = document.querySelector("input[name=selectPicture]:checked").value;
			puzzleDifficulty=parseInt(puzzleDifficulty);
			puzzleRotatable = parseInt(puzzleRotatable);
			var img = document.getElementById("picture"+puzzlePicture).src;
			$("#puzzle-image1")
				.removeClass('showPuzzleOutline')
				.off('load')
				.attr('src',img)
				.attr('crossorigin','anonymous')
				.on('load',function(){
				    setupPuzzle()
				});
		}

		function isTablet(){ 
			const userAgent = navigator.userAgent.toLowerCase();
			const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
			return isTablet;
		}
		function isMobileDevice() { 
			var check = false;
			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
			return check; 
		};
		const rectOverlap = (rect1, rect2) => {
		  let [left1, top1, right1, bottom1] = [...rect1],
			  [left2, top2, right2, bottom2] = [...rect2];
		  return left1<=right2&& right1>=left2&& top1<=bottom2&&bottom1>=top2;
		}
		checkForErrors = function() {
			var c,r,i,j,arr = [];
			for (i=0;i<tiles.list.length;i++) {
				tile=tiles.list[i];
				r=tile.shape.row;c=tile.shape.column;
				if (typeof arr[r]=='undefined') arr[r]=[];
				arr[r][c]=tile;
			}
			for (i=0;i<tiles.tilesPerRow;i++) {
				for (j=0;j<tiles.tilesPerColumn;j++){
					tile=arr[i][j];
					r=tile.shape.row;c=tile.shape.column;
					if (c==-1 || c==tiles.tilesPerColumn) continue;
					if (c<tiles.tilesPerColumn-1){
						if (arr[i][j+1].shape.left.variation!=tile.shape.right.variation) {
							alert("error in variation");
							debugger;
						}
					}
					if (r<tiles.tilesPerRow-1){
						if (arr[i+1][j].shape.top.variation!=tile.shape.bottom.variation) {
							alert("error in variation");
							debugger;
						}
					}
				}
			}
			for (i=0;i<groups.list.length;i++) { // for each group;
				grp = groups.list[i];
				err=true;
				for (j=0;j<grp.list.length;j++) { // for each item in group;
					if (grp.list.length==1) {
						err=false;
						continue;
					}
					item1 = grp.list[j];
					for (k=j+1;k<grp.list.length;k++) {
						item2=grp.list[k];
						if (item1.shape.row==item2.shape.row) {
							if (item1.shape.column-1==item2.shape.column ||
								item1.shape.column+1==item2.shape.column) err=false;
						} else if (item1.shape.column==item2.shape.column) {
							if (item1.shape.row-1==item2.shape.row ||
								item1.shape.row+1==item2.shape.row) err=false;
						}
					}
				}
				if (err) debugger;
			}
		}
		tile = {};
		tile.getMask = function(tileWidth,tileHeight) {
			var i,path,xOffset=0,yOffset=0,ratioWidth=tileWidth/100,ratioHeight=tileHeight/100,
			top=this.shape.top,left=this.shape.left,
			right=this.shape.right,bottom=this.shape.bottom,
			curvyCoord = [[
				  0, 0, 35, 15, 37, 5,
				  37, 5, 40, 0, 38, -5,
				  38, -5, 20, -20, 50, -20,
				  50, -20, 76, -20, 58, -5,
				  58, -5, 56, 0, 59, 5,
				  59, 5, 63, 15, 100, 0],
				[
				  0,0,37,7,48,3,
				  59,-1,58,-3,55,-6,
				  48,-13,58,-19,65,-19,
				  81,-19,88,-15,68,-6,
				  63,-4,64,3,69,5,
				  75,7,77,11,100,0],
				[  
					12,10,20,10,37,5,
					44,2,48,-2,38,-5,
					30,-7,23,-19,50,-20,
					79,-21,79,-12,62,-5,
					50,-1,55,5,63,5,
					80,5,89,4,100,0	],			 
				[	12,10,20,10,37,5,
					44,2,48,-2,38,-5,
					30,-7,23,-19,50,-20,
					79,-21,79,-12,62,-5,
					50,-1,55,5,63,5,
					80,5,89,4,100,0],
				[
				  0, 0, 35, 15, 41, 5,
				  41, 5, 44, 0, 42, -5,
				  42, -5, 24, -20, 50, -20,
				  50, -20, 80, -20, 62, -5,
				  62, -5, 60, 0, 63, 5,
				  63, 5, 65, 15, 100, 0],
				 [0, 0, 35, 15, 37, 5,
				  37, 5, 40, 0, 38, -5,
				  38, -5, 20, -20, 50, -20,
				  50, -20, 80, -20, 62, -5,
				  62, -5, 60, 0, 63, 5,
				  63, 5, 65, 15, 100, 0]
				];
			this.tileWidth = tileWidth;
			this.tileHeight= tileHeight;
			context.save();
			context.translate( tileWidth * this.shape.column,tileHeight * this.shape.row);
			path = new Path2D();
			path.moveTo(0, 0);
			//left.variation=right.variation=top.variation=bottom.variation=2;
			for (i = 0;i < 6;i++){
				path.bezierCurveTo( // top
				   xOffset + curvyCoord[top.variation][i * 6 + 0] * ratioWidth, 
				   yOffset + curvyCoord[top.variation][i * 6 + 1] * ratioHeight * top.type, 
				   xOffset + curvyCoord[top.variation][i * 6 + 2] * ratioWidth, 
				   yOffset + curvyCoord[top.variation][i * 6 + 3] * ratioHeight * top.type, 
				   xOffset + curvyCoord[top.variation][i * 6 + 4] * ratioWidth, 
				   yOffset + curvyCoord[top.variation][i * 6 + 5] * ratioHeight * top.type);
			}
			xOffset = tileWidth;
			yOffset = 0;
			for (i = 0;i < 6;i++){
				path.bezierCurveTo( // right
				   xOffset + curvyCoord[right.variation][i * 6 + 1] * ratioWidth * right.type, 
				   yOffset + curvyCoord[right.variation][i * 6 + 0] * ratioHeight, 
				   xOffset + curvyCoord[right.variation][i * 6 + 3] * ratioWidth * right.type, 
				   yOffset + curvyCoord[right.variation][i * 6 + 2] * ratioHeight, 
				   xOffset + curvyCoord[right.variation][i * 6 + 5] * ratioWidth * right.type, 
				   yOffset + curvyCoord[right.variation][i * 6 + 4] * ratioHeight);
			}
			xOffset = 0;
			yOffset = tileHeight;
			for (i = 5;i >=0;i--){  
				bc=[
				   xOffset + curvyCoord[bottom.variation][i * 6 + 2] * ratioWidth, 
				   yOffset + curvyCoord[bottom.variation][i * 6 + 3] * ratioHeight * -bottom.type, 
				   xOffset + curvyCoord[bottom.variation][i * 6 + 0] * ratioWidth, 
				   yOffset + curvyCoord[bottom.variation][i * 6 + 1] * ratioHeight * -bottom.type];
				   if (i>0) {bc.push(xOffset + curvyCoord[bottom.variation][(i-1) * 6 + 4] * ratioWidth); 
							 bc.push(yOffset + curvyCoord[bottom.variation][(i-1) * 6 + 5] * ratioHeight * -bottom.type);
					}
				   else {
						bc.push(xOffset);bc.push(yOffset);
					}
				path.bezierCurveTo(...bc);
			}
			xOffset = 0;   
			yOffset = 0;
			for (i = 5;i >=0;i--){ // left
				bc=[
				   xOffset + curvyCoord[left.variation][i * 6 + 3] * ratioWidth * -left.type, 
				   yOffset + curvyCoord[left.variation][i * 6 + 2] * ratioHeight, 
				   xOffset + curvyCoord[left.variation][i * 6 + 1] * ratioWidth * -left.type, 
				   yOffset + curvyCoord[left.variation][i * 6 + 0] * ratioHeight];
				   if (i>0) {bc.push(xOffset + curvyCoord[left.variation][(i-1) * 6 + 5] * ratioWidth * -left.type); 
							 bc.push(yOffset + curvyCoord[left.variation][(i-1) * 6 + 4] * ratioHeight);
					}
				   else {
						bc.push(yOffset);bc.push(xOffset);
					}
				path.bezierCurveTo(...bc);
			}
			path.closePath();
			this.mask = path;
			context.restore();
		};
		tile.setBoundingRect = function() {
			if (tile.direction=='N'||tile.direction=='S') {
				this.boundingRect = [ this.position.x - tiles.tileWidthPadding, this.position.y - tiles.tileHeightPadding,
									  this.position.x +this.tileWidth+tiles.tileWidthPadding,
									  this.position.y +this.tileHeight+tiles.tileHeightPadding]
			} else {
				this.boundingRect = [ this.position.x - tiles.tileHeightPadding, this.position.y - tiles.tileWidthPadding,
									  this.position.x +this.tileHeight+tiles.tileHeightPadding,
									  this.position.y +this.tileWidth+tiles.tileWidthPadding]
			}
		}
		tile.setPosition=function(offsetX,offsetY) {
			this.position = {x:offsetX,y:offsetY};
			this.setBoundingRect();
		}
		tile.setMouseMovement=function(deltaX,deltaY){		 
			var offsetX=this.position.x+deltaX;
			var offsetY=this.position.y+deltaY;
			this.position = {x:offsetX,y:offsetY};
			this.setBoundingRect();
		}
		tile.drawEdge = function() {
			context.save();
			context.beginPath();
			switch(this.type) {
				case 1:   	// north-east
					context.moveTo(this.position.x+this.tileWidth,this.position.y);
					context.lineTo(this.position.x+this.tileWidth*2,this.position.y);
					context.moveTo(this.position.x+this.tileWidth,this.position.y);
					context.lineTo(this.position.x+this.tileWidth,this.position.y+this.tileHeight);
					break;
				case 2:		// south-east
					context.moveTo(this.position.x+this.tileWidth,this.position.y+this.tileHeight);
					context.lineTo(this.position.x+this.tileWidth*2,this.position.y+this.tileHeight);
					context.moveTo(this.position.x+this.tileWidth,this.position.y+this.tileHeight);
					context.lineTo(this.position.x+this.tileWidth,this.position.y);
					break;
				case 3:		// north-west
					context.moveTo(this.position.x-1,this.position.y+1);
					context.lineTo(this.position.x-1-this.tileWidth,this.position.y+1);
					context.moveTo(this.position.x-1,this.position.y+1);
					context.lineTo(this.position.x-1,this.position.y+1+this.tileHeight);
					break;
				case 4:		// south-west
					context.moveTo(this.position.x-1,this.position.y-1+this.tileHeight);
					context.lineTo(this.position.x-1-this.tileWidth,this.position.y-1+this.tileHeight);
					context.moveTo(this.position.x-1,this.position.y-1+this.tileHeight);
					context.lineTo(this.position.x-1,this.position.y-1);
					break;
			}
			context.strokeStyle="black";
			context.stroke();
			context.restore();
			this.isDirty=false;
		}

		tiles = {};
		tiles.list =[]; 
		tiles.initialize = function(img) {
			var i,x,y,c,tile;
			this.lastZIndex=20;
			this.inFinishPuzzle=false;
			this.rotatable=puzzleRotatable;
			this.setImage(img); 
			this.setShape();
			this.getMasks(); 
			tiles.calcImageOffset();
			this.setFinishClass();
			if (isMobileDevice()&&!isTablet()) this.nearEnough=this.tileWidth*0.50;
			else if (isTablet()) this.nearEnough=this.tileWidth*0.4;
			else this.nearEnough=this.tileWidth/3;
			for (i = 0;i < tiles.list.length;i++) {
				x = this.tileWidth/2  + Math.random() * (canvas.width-this.tileWidth*1.5);
				y = this.tileHeight/2 + Math.random() * (canvas.height-this.tileHeight*2.5);
				x = Math.floor(x);
				y = Math.floor(y);
				if (x>this.dragExclusion.x&&y<this.dragExclusion.y)
					y+=this.dragExclusion.y;
				tile = this.list[i];
				tile.zIndex = this.lastZIndex++;
				tile.setPosition(x,y); 
				groups.addGroup(tile,this.img);

			}
			this.setEdges();  
			//c.addEventListener('mousedown',mouseDown);
			// jquery is blocking???
			//$('canvas').on("touchstart", touchStart, false);
			this.showPuzzleOutline();
		}
		tiles.calcImageOffset = function() {
			var ix=this.tileWidth/2,iy=this.tileHeight/2;
			// offset assumes that zero offset results in tile width/hight puzzle offset....
			// positive imageOffsets reduce the actual puzzle offset
			// negative imageOffsets increases the actual puzzle offset
			this.imageOffset={x:ix-ix%2,y:iy-iy%2}   //therefore tile-1/2=1/2 == default
			if (this.imageOffset.x+this.imageWidth>this.dragExclusion.x)
				this.imageOffset.y=this.imageOffset.y-this.dragExclusion.y;
			this.topLeftCorner={x:this.imageOffset.x,y:this.tileHeight-this.imageOffset.y};	
		}
		tiles.setEdges = function() {
			var i,t, x, y, g;
			for (i=1;i<=4;i++){
				t = Object.assign({},tile);   // hopefully the same as new tile();
				t.shape={}
				t.isMovable=false;
				t.isDirty=true;
				t.zIndex=2;
				t.direction='N';
				t.type=i;
				t.rotatable=0;
				t.tileWidth=this.tileWidth;
				t.tileHeight=this.tileHeight;
				
				switch (i) {
					case 1:  // north-east
						t.shape.row=0;
						t.shape.column=-1;
						x=this.tileWidth,y=this.tileHeight;
						break;
					case 2:   // south-east
						t.shape.row=this.tilesPerRow-1;
						t.shape.column=-1;
						x=this.tileWidth,y=this.tileHeight*(this.tilesPerRow);
						break;
					case 3:		// north-west
						t.shape.row	= 0;
						t.shape.column = this.tilesPerColumn
						x=this.tileWidth*(this.tilesPerColumn+2);y=this.tileHeight;
						break;
					case 4:
						t.shape.row = this.tilesPerRow-1;
						t.shape.column = this.tilesPerColumn;
						x=this.tileWidth*(this.tilesPerColumn+2);y=this.tileHeight*(this.tilesPerRow);
						break;
				} 
				t.setPosition(x-this.imageOffset.x-t.tileWidth,y-this.imageOffset.y);
				tiles.list.push(t);
				groups.addGroup(t,this.img);
			}
		}
		tiles.hitTest = function(point) {
			var i,j,tile;
			tiles.list.sort((a, b) => {
				return b.zIndex - a.zIndex;
			});
			for (i = 0;i < tiles.list.length;i++) {
				tile = this.list[i].hitTest(point);
				if (tile) return tile;
			}
			return;
		}
		tiles.setShape = function(){
			var i, j, g, t, top, left, right, bottom, vtop, vleft, vright, vbottom, entry,arr=[];
			for (i = 0;i < this.tilesPerRow;i++){
				arr[i]=[]
				for (j = 0;j < this.tilesPerColumn;j++){
					vtop = vleft = vright = vbottom = 0;
					if (i == 0) top = 0;
					else {
						entry=arr[i-1][j].shape;
						top = entry.bottom.type == 1 ? - 1: 1;
						vtop = entry.bottom.variation;
					}
					if (j == 0) left = 0;
					else {
						entry=arr[i][j-1].shape;
						left = entry.right.type == 1 ? - 1: 1;
						vleft = entry.right.variation;
					}
					if (j == this.tilesPerColumn - 1) right = 0;
					else {
						right = Math.pow( - 1, Math.floor(Math.random() * 2));
						vright = Math.floor(Math.random() * 6);
					}
					if (i == this.tilesPerRow - 1) bottom = 0;
					else {
						bottom = Math.pow( - 1, Math.floor(Math.random() * 2));
						vbottom = Math.floor(Math.random() * 6);
					}
					t = Object.assign({},tile);   // hopefully the same as new tile();
					t.img = this.img;
					t.isMovable=true;
					t.isDirty=true;
					t.type=0;
					t.rotatable=this.rotatable;
					t.direction='N';
					t.shape = {top: {type: top, variation: vtop}, left: {type: left, variation: vleft}, right: {type: right, 
					   variation: vright}, bottom: {type: bottom, variation: vbottom}, row: i, column: j,
					   };
					arr[i][j]=t;
				}
			}
			tiles.list=arr.flat();
		};
		tiles.setImage = function(img){
			var offset,d;
			this.img = img; // dom element;
			this.imageWidth = $(img).width();
			this.imageHeight = $(img).height();
			switch (puzzleDifficulty) {
				case 4:	//'very hard':
					this.tilesPerColumn=Math.floor(this.rowColRatio[0]*2.5)
					this.tilesPerRow   =Math.floor(this.rowColRatio[1]*2.5)
					break;
				case 3:	//'hard':
					this.tilesPerColumn=Math.floor(this.rowColRatio[0]*2)
					this.tilesPerRow   =Math.floor(this.rowColRatio[1]*2)
					break;
				case 2:	//'medium':
					this.tilesPerColumn=Math.floor(this.rowColRatio[0]*1.5)
					this.tilesPerRow   =Math.floor(this.rowColRatio[1]*1.5)
					break;
				case 1:  //'easy':
					this.tilesPerColumn=this.rowColRatio[0]
					this.tilesPerRow   =this.rowColRatio[1]
					break;
				default:
					this.tilesPerColumn=this.rowColRatio[0]*2
					this.tilesPerRow   =this.rowColRatio[1]*2
			}
			tiles.tileWidth = this.imageWidth/tiles.tilesPerColumn;
			tiles.tileWidth -= tiles.tileWidth%2;
			tiles.tileHeight= this.imageHeight/tiles.tilesPerRow;
			tiles.tileHeight-= tiles.tileHeight%2;
			tiles.tileWidthPadding = Math.floor(tiles.tileWidth*0.5);
			tiles.tileHeightPadding = Math.floor(tiles.tileHeight*0.5);
			offset= $('.charms').offset();
			this.dragExclusion = {x:offset.left-this.tileWidth,y:offset.top+$('.charms').height()};
		};
		tiles.setFinishClass = function() {
			var css = {
				top:this.topLeftCorner.y+'px',
				left:this.topLeftCorner.x+'px',
				width:this.imageWidth+'px',
				height:this.imageHeight+'px'
			}
			$('.puzzle-image1').addClass('start').css(css);
			$('#puzzle-image').addClass('start').css(css);
		}
		tiles.getMasks = function(){
			var i, j, tile;
			for (i = 0;i < tiles.list.length;i++) {
				tile = this.list[i];
				tile.getMask(this.tileWidth,this.tileHeight);
			}
		};
		tiles.showPuzzleOutline = function() {
			for (i = 0;i < tiles.list.length;i++){
				if(tiles.list[i].type!=0) tiles.list[i].drawEdge();
			}
		};

		group = {}  
		group.clear = function() {
			var i
			for (i=0;i<this.list.length;i++) {
				this.list[i].clear();
			}
		}
		group.isMember = function(tile) {
			var i,item;
			for (i=0;i<this.list.length;i++) {
				item = this.list[i];
				if (item.shape.row==tile.shape.row && item.shape.column==tile.shape.column) return true;
			}
			return false;
		}
		group.addTile = function(tile) {
			this.list.push(tile);
			this.getContext();
		}
		group.setPosition = function() {
			var i,item,top=10000,left=10000,t=10000,
				l=10000,right=0,bottom=0,zIndex=0;
			for (i=0;i<this.list.length;i++) {
				item = this.list[i];
				if (t>item.position.y) t=item.position.y;
				if (l>item.position.x) l=item.position.x;
				if (top>item.boundingRect[1]) top=item.boundingRect[1];
				if (left>item.boundingRect[0])left=item.boundingRect[0];
				if (right<item.boundingRect[2]) right=item.boundingRect[2];
				if (bottom<item.boundingRect[3])bottom=item.boundingRect[3];
				if (zIndex<item.zIndex) zIndex=item.zIndex;
			}
			this.position={x:l,y:t};
			if (this.canvas) { 
				this.canvas.style.left=left+"px";
				this.canvas.style.top=top+"px";
			}
			this.boundingRect=[left,top,right,bottom];
			this.zIndex= zIndex;
		}
		group.getContext = function() {
			this.setPosition();
			if (this.canvas) $('#'+this.id).remove()
			this.canvas = document.createElement('canvas');
			$("#divCanvas").prepend(this.canvas);
			this.canvas.id=this.id;
			this.canvas.style.position='absolute';
			//this.position={x:0,y:0};  
			this.canvas.classList.add("tileCanvas")
			this.context=this.canvas.getContext('2d');
			this.canvas.style.zIndex=this.zIndex;
			this.canvas.width = this.boundingRect[2]-this.boundingRect[0];
			this.canvas.height= this.boundingRect[3]-this.boundingRect[1];
			this.canvas.style.left=this.position.x+"px";
			this.canvas.style.top =this.position.y+"px";
			//this.context.fillStyle='#ffffff00';
			//this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
			$('#'+this.id).on('mousedown', mouseDown)
			$('#'+this.id).on('mouseup touchend',mouseTap);    
			$('#'+this.id)[0].addEventListener('touchstart',touchStart,false);
			$('#'+this.id)[0].addEventListener('contextmenu', e => e.preventDefault())
			this.draw();
		}
		group.freeSide = function(item) {
			var i,t,c,r, row=item.shape.row,col=item.shape.column;
			for (i=0;i<tiles.list.length;i++) {
				t=tiles.list[i];
				r=t.shape.row;c=t.shape.column;   
				if (r==row&&c==col&&t.isMovable) return true;
				if (r<tiles.tilesPerRow-1&&r+1==row&&   c==col&t.isMovable) return true;
				if (r>0&&r-1==row&&						c==col&t.isMovable) return true;
				if (r==row&&c<tiles.tilesPerColumn-1&&	c+1==col&t.isMovable) return true;
				if (r==row&&c>0	&&						c-1==col&t.isMovable) return true;
			}
			return false;
		}
		group.draw = function() {
			var i,item,sx,sy;
			for (i=0;i<this.list.length;i++) {
				item=this.list[i];
				if (item.type!=0) continue;
//				this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
				sx = item.position.x - this.boundingRect[0]; 
				sy = item.position.y - this.boundingRect[1];
				this.context.save();
				this.context.translate(sx+item.tileWidth/2,sy+item.tileHeight/2);
				this.context.rotate(['N','E','S','W'].indexOf(item.direction)*90*Math.PI/180);
				//this.context.save();
				this.context.translate(-item.tileWidth/2,-item.tileHeight/2);
				this.context.clip(item.mask);
				//this.context.stroke(item.mask);
				//this.context.save()    
				sx = -item.shape.column*item.tileWidth;
				sy = -item.shape.row*item.tileHeight;
				this.context.drawImage(this.img,sx,sy);
				if (this.freeSide(item)&& !this.inFinishPuzzle) { 
					this.context.lineWidth=2;
					this.context.strokeStyle='#FFFFFF';
					this.context.stroke(item.mask);
					this.context.lineWidth=1;
					this.context.strokeStyle='#000000';
					this.context.stroke(item.mask);
				}
				//this.context.restore();
				this.context.restore();								
				this.canvas.style.left=this.boundingRect[0]+"px";
				this.canvas.style.top =this.boundingRect[1]+"px";
			}
			this.isDirty=false;
		}
		group.mergeGroup = function(grp) {
			var i, m=true,z=2000,items = grp.list;
			for (i=0;i<items.length;i++) this.list.push(items[i]);
			for (i=0;i<this.list.length;i++) {
				if (this.list[i].isMovable==false) m=false;
				if (this.list[i].zIndex<z) z=this.list[i].zIndex;
			}
			if (!m) z=1;
			for (i=0;i<this.list.length;i++) {
				this.list[i].isMovable=m;
				this.list[i].zIndex=z;
			}
			this.isMovable=m;
			if (!this.isMovable) this.draw();
			grp.canvas.remove();
			this.canvas.style.zIndex=z;
			this.getContext(); 
		}
		group.bringBack = function() {
			var i,item;
			for (i=0;i<this.list.length;i++) {
				item = this.list[i];
				item.zIndex = 1;
			} 
			this.zIndex=1;
			this.canvas.style.zIndex=1;
		}
		group.bringToFront = function() {
			var i,li=tiles.lastZIndex++;
			for (i=0;i<this.list.length;i++) this.list[i].zIndex=li;
			this.canvas.style.zIndex=li;
		}
		group.setMouseMovement = function(offsetX,offsetY) {
			var i,item;
			for (i=0;i<this.list.length;i++) {
				item = this.list[i];
				item.setMouseMovement(offsetX,offsetY);
			}
			this.setPosition();
		}
		group.checkLeftMatch = function(target,tGroup) {
			var i,sum,offsetX,offsetY,item;
			for (i=0;i<this.list.length;i++) {  // target on 'left' and item on right
				item=this.list[i]; 
				if (target.direction!=item.direction) continue
				[offsetX,offsetY,sum] = this.getOffset(target,item,'left');
				if (sum<tiles.nearEnough && !target.isInMatch &&
					target.shape.row==item.shape.row && 
					target.shape.column+1==item.shape.column) {
						if (target.isMovable) {
							 tGroup.setMouseMovement(-offsetX,-offsetY);  // move to exact location.
						}
						else { 	
							 this.setMouseMovement(offsetX,offsetY);  // move to exact location.
						}
						return true;
					}	
			}
			return false
		}
		group.checkTopMatch = function(target,tGroup) {
			var i,sum,offsetX,offsetY,item;
			for (i=0;i<this.list.length;i++) {	// target on top and item on bottom;
				item=this.list[i];
				if (target.direction!=item.direction) continue
				[offsetX,offsetY,sum] = this.getOffset(target,item,'top');
				if (sum<tiles.nearEnough && !target.isInMatch &&
					target.shape.row+1==item.shape.row && 
					target.shape.column==item.shape.column) {
						if (target.isMovable) {
							 tGroup.setMouseMovement(-offsetX,-offsetY);  // move to exact location.
						}
						else {	
							 this.setMouseMovement(offsetX,offsetY);  // move to exact location.
						}
						return true;
					}	
			}
			return false
		}
		group.checkRightMatch = function(target,tGroup) {
			var i,sum,offsetX,offsetY,item;
			for (i=0;i<this.list.length;i++) {		// target on 'right' and item on left;
				item=this.list[i];
				if (target.direction!=item.direction) continue
				[offsetX,offsetY,sum] = this.getOffset(target,item,'right');
				if (sum<tiles.nearEnough && !target.isInMatch &&
					target.shape.row==item.shape.row  && 
					target.shape.column-1==item.shape.column) {
						if (target.isMovable) {
							 tGroup.setMouseMovement(-offsetX,-offsetY);  // move to exact location.
						}
						else {	
							 this.setMouseMovement(offsetX,offsetY);  // move to exact location.
						}
						return true;
					}	
			}
			return false
		}
		group.checkBottomMatch = function(target,tGroup) {
			var i,sum,offsetX,offsetY,item;
			for (i=0;i<this.list.length;i++) {		// target on 'bottom'  and item on top
				item=this.list[i];
				if (target.direction!=item.direction) continue
				[offsetX,offsetY,sum] = this.getOffset(target,item,'bottom');
				if (sum<tiles.nearEnough && !target.isInMatch &&
					target.shape.row-1==item.shape.row  &&
					target.shape.column==item.shape.column) {
						if (target.isMovable) {
							 tGroup.setMouseMovement(-offsetX,-offsetY);  // move to exact location.
						}
						else { 	
							 this.setMouseMovement(offsetX,offsetY);  // move to exact location.
						}
						return true;
					}	
			}
			return false
		}
		group.getOffset = function(target,item,tblr) {
			var offsetX,offsetY;
			var d=['N','E','S','W'].indexOf(target.direction);
			var t  =['top','bottom','left','right'].indexOf(tblr);
			var sw = [	0,1,2,3, // north
						7,6,4,5, // east
						1,0,3,2, // south
						6,7,5,4	 // west
					][d*4+t];
			switch (sw) {
				case 0:
					offsetX = target.position.x-item.position.x;
					offsetY = target.position.y+target.tileHeight - item.position.y;
					break;
				case 1:
					offsetX = target.position.x-item.position.x;
					offsetY = target.position.y-target.tileHeight - item.position.y;
					break;
				case 2:
					offsetX = target.position.x+target.tileWidth-item.position.x;
					offsetY = target.position.y - item.position.y;
				
					break;
				case 3:
					offsetX = target.position.x-target.tileWidth-item.position.x;
					offsetY = target.position.y - item.position.y;
					break;
				case 4:
					offsetX = target.position.x-item.position.x;
					offsetY = target.position.y+target.tileWidth - item.position.y;
					break;
				case 5:
					offsetX = target.position.x-item.position.x;
					offsetY = target.position.y-target.tileWidth - item.position.y;
					break;
				case 6:
					offsetX = target.position.x+target.tileHeight-item.position.x;
					offsetY = target.position.y - item.position.y;
				
					break;
				case 7:
					offsetX = target.position.x-target.tileHeight-item.position.x;
					offsetY = target.position.y - item.position.y;
					break;

			}
			return [offsetX,offsetY,Math.abs(offsetX) + Math.abs(offsetY)];
		}   
		group.setIfDirty = function(rect) {
			if (rectOverlap(rect,this.boundingRect)) {
				this.isDirty = true;
			}
		}
		group.setRandomRotation = function() {
			var i,d =['N','E','S','W'];
			var ndx=Math.floor(Math.random()*4);
			var deg = ndx*90;
			this.direction=d[ndx];  
			for (i=0;i<this.list.length;i++) this.list[i].direction=this.direction;
			this.getContext();
		}
		group.rotate90 = function() {
			var x,y,h,item,cx,cy,d =['N','E','S','W'];
			var ndx =d.indexOf(this.direction)+1;
			if (!this.isMovable) return;
			if (ndx==4) ndx=0;
			this.direction=d[ndx];
			cx = (this.boundingRect[2]-this.boundingRect[0])/2+this.boundingRect[0];
			cy = (this.boundingRect[3]-this.boundingRect[1])/2+this.boundingRect[1];
			if (this.direction=='N'||this.direction=='S') h=tiles.tileHeight;
			else										  h=tiles.tileWidth;
			for (i=0;i<this.list.length;i++) {
				item=this.list[i];
				item.direction=this.direction;
				x = item.position.x-cx;
				y = item.position.y+h-cy;
				item.position.x=cx-y;
				item.position.y=cy+x;
				item.setBoundingRect();   
			}	
			this.getContext();
			//this.canvas.style.transform='rotate('+(ndx*90)+'deg)';
		}

		groups = {};
		groups.bringToFront = function(tile){
			var i,grp;
			for (i=0;i<this.list.length;i++) {
				grp = this.list[i];
				if (grp.isMember(tile)) {
					grp.bringToFront();
					return;
				}
			}
		};
		groups.addGroup = function(t,img) {
			var g = Object.assign({list:[],canvas:false},group); 
			g.id = 'canvas'+(this.list.length+1);
			g.img = img;
			g.isMovable=true;
			g.inFinishPuzzle=false;
			g.rotatable=t.rotatable;
			g.addTile(t);
			g.direction=t.direction;
			this.list.push(g);
			if (g.list.length) g.setPosition();
			if (g.rotatable) g.setRandomRotation();
			return g;
		}
/*		groups.setMouseMovement = function(tile,offsetX,offsetY) {
			var i,grp;
			for (i=0;i<this.list.length;i++) {
				grp = this.list[i];
				if (grp.isMember(tile)) {
					grp.setMouseMovement(offsetX,offsetY);
					return;
				}
			}
		}
*/
		groups.checkMatches = function() {
			var l,tile,found=false;
			for (l=0;l<tiles.list.length;l++) {
				tile=tiles.list[l];
				// if (tile.isMovable==false) continue; // tile cannot be moved...
				tile.isInMatch=false;
				if (groups.checkMatch(tile)) {
					l=0;
					tile.isInMatch=true;
					found=true;
				}
			}
			return found;
		}
		groups.checkMatch = function(tile) {
			var i,j,k,l,found;
			for (k=0;k<this.list.length;k++) {
				if (this.list[k].isMember(tile)) {
					break;
				}	
			}
			for (i=0;i<this.list.length;i++) {
				if (i==k) continue;
				g = this.list[i];
				if (g.checkLeftMatch(tile,this.list[k])) {
					this.list[k].mergeGroup(this.list[i]);
					this.list.splice(i,1);
					break;
				}
				if (g.checkTopMatch(tile,this.list[k])) {
					this.list[k].mergeGroup(this.list[i]);
					this.list.splice(i,1);
					break;
				}
				if (g.checkRightMatch(tile,this.list[k])) {
					this.list[k].mergeGroup(this.list[i]);
					this.list.splice(i,1);
					break;
				}
				if (g.checkBottomMatch(tile,this.list[k])) {
					this.list[k].mergeGroup(this.list[i]);
					this.list.splice(i,1);
					break;
				}
			} 
			if (i!=this.list.length) {
				for (k=0;k<this.list.length;k++) {
					if (this.list[k].isMember(tile)) {
						this.list[k].bringBack();
						break;
					}	
				}
				return true; 
			}
			return false;
		}
/*		groups.setIfDirty = function(g)   {
			var i,grp;
			for (i=0;i<this.list.length;i++) {
				grp=this.list[i];
				if (grp.id==g.id) continue;
				grp.setIfDirty(g.boundingRect);
			}
		};
*/	
		groups.showPuzzleOutline = function() {
			var i,grp;
			for (i=0;i<this.list.length;i++) {
				grp = this.list[i];
				if (grp.isDirty) grp.draw();
			}
		}
		
		var mouseDown = function(event) {
			event.target.tapEvent = {
				startTime:Date.now(),
				x: event.clientX,
				y: event.clientY
			}
			event.preventDefault();
			var group=false,t=false,i,j,g,x=event.clientX,y=event.clientY;
			tiles.list.sort((a, b) => {
				return b.zIndex - a.zIndex;
			});
			for (i=0;i<tiles.list.length;i++) { 
				t=tiles.list[i];
				if (t.position.x<x&&t.position.x+t.tileWidth>x &&
					t.position.y<y&&t.position.y+t.tileHeight>y) break;
			}
			if (i==tiles.list.length) return;
			for (i=0;i<groups.list.length;i++) {
				g=groups.list[i];
				for (j=0;j<g.list.length;j++) {
					if (g.list[j]==t) {
						group=tiles.hitGroup=g;
						break;
					}
				}
				if (group) break; 
			}
			if (!group) return;
			if (group.isMovable==false) return;
			document.body.addEventListener('touchmove',touchMove,false);
			document.body.addEventListener('touchend',touchEnd,false);
			document.body.addEventListener('touchcancel',touchEnd,false);
			document.body.addEventListener('mousemove',mouseMove);
			document.body.addEventListener('mouseup',mouseUp);
			
			group.bringToFront();
			tiles.mouseDown=true;
			tiles.firstPosition=tiles.lastPosition=[event.clientX,event.clientY];
		}
		var mouseTap = function(event) {
			var touch,threshold,moveDistance;
			if (!event.target.tapEvent) return;
			if (event.type=='touchstart') {
				event.clientX=event.targetTouches[0].clientX;
				event.clientY=event.targetTouches[0].clientY;
			}
            moveDistance = Math.sqrt(Math.pow(event.clientX - event.target.tapEvent.x, 2) +
                                     Math.pow(event.clientY - event.target.tapEvent.y, 2));
			threshold = Date.now()-event.target.tapEvent.startTime;
			event.target.tapEvent = null;
			if (threshold>600||moveDistance>15) return;
			if(tiles.hitGroup && tiles.hitGroup.rotatable) tiles.hitGroup.rotate90();
		}
		var mouseUp = function(event) {
			event.preventDefault();
			if (!tiles.mouseDown) return;
			var grp =tiles.hitGroup;
			document.body.removeEventListener('touchmove',touchMove,false);
			document.body.removeEventListener('touchend',touchEnd,false);
			document.body.removeEventListener('touchcancel',touchEnd,false);
			document.body.removeEventListener('mousemove',mouseMove);
			document.body.removeEventListener('mouseup',mouseUp,false);
			event.preventDefault();
			tiles.mouseDown=false;
			tiles.hitGroup = '';
			if (!grp) return;
			if (!grp.isMovable) return;
			if (groups.checkMatches(grp)) {
				groups.showPuzzleOutline();
			}
			checkForErrors();
			if (groups.list.length==1) finished();
		}
		var finished  = function() {
			context.clearRect(0,0,canvas.width,canvas.height);
			$('.tileCanvas').remove();
			$('.puzzle-image1')
				.addClass('showPuzzleOutline')
				.removeClass('start').addClass('finish')
				.css({width:window.innerWidth+"px",height:window.innerHeight+"px",left:'0px',top:'0px'})
			$('#congrat').removeClass('start').addClass('finish');
			document.getElementById('canvasPage').addEventListener("click",function(){
				$('.puzzle-image1')
					.removeClass('showPuzzleOutline')
					.addClass('start').removeClass('finish')
				$('#congrat').addClass('start').removeClass('finish');
				document.getElementById('canvasPage').style.display='none';
				document.getElementById('page1').style.display='block';
			},{once:true});
		}
		var mouseMove = function(event) {
			event.preventDefault();
			if (!tiles.mouseDown) return;
			let [startX,startY]  = [...tiles.lastPosition];
//			let [x,y]  = [...tiles.firstPosition];
			var i,j,grp=tiles.hitGroup,
				offsetX=event.clientX-startX,
				offsetY=event.clientY-startY;
			tiles.lastPosition = [event.clientX,event.clientY];
//			if (grp.id!=event.target.id) return;
			if (!grp.isMovable) return;
			// can't move off canvas
			if  (grp.position.x+offsetX>tiles.dragExclusion[0] &&
				 grp.position.y+offsetY<tiles.dragExclusion[1]) 
				 return;
			if (grp.position.x+offsetX<0 ||grp.position.y+offsetY<0) 
				return;
			if (grp.position.x+offsetX>canvas.width-tiles.tileWidth)
				return;
			if (grp.position.y+offsetY>canvas.height-tiles.tileHeight)
				return;

			grp.setMouseMovement(offsetX,offsetY)
		}
		var touchStart = function(event) {
			event.clientX=event.targetTouches[0].clientX;
			event.clientY=event.targetTouches[0].clientY;
			mouseDown(event);
		}
		var touchEnd = function(event) {
			event.clientX=event.changedTouches[0].clientX;
			event.clientY=event.changedTouches[0].clientY;
			mouseUp(event);
		}
		var touchMove = function(event) {
			event.clientX=event.targetTouches[0].clientX;
			event.clientY=event.targetTouches[0].clientY;
			mouseMove(event);
		}
		var initCanvas = function() {
			canvasPage = document.getElementById('canvasPage');
			divCanvas = document.getElementById('divCanvas');
			canvas = document.getElementById('canvas');
			context = canvas.getContext('2d');
			inResize=false;
			$('.charms')
				.on('mousedown touchstart',handleIconDown)
				.on('mouseup touchend touchcancel',handleIconUp);
			$('.backButton').on('mousedown touchstart',function() {
				document.getElementById('canvasPage').style.display='none';
				document.getElementById('page1').style.display='block';
			})
			document.body.addEventListener("touchstart", function(e){ if (e.target.nodeName == 'CANVAS') { e.preventDefault(); } }, false);
			document.body.addEventListener("touchend", function(e){ if (e.target.nodeName == 'CANVAS') { e.preventDefault(); } }, false);
			document.body.addEventListener("touchmove", function(e){ if (e.target.nodeName == 'CANVAS') { e.preventDefault(); } }, false);			canvas.width=window.innerWidth;
			canvasPage.style.width = window.innerWidth+"px";
			canvasPage.style.height=window.innerHeight+"px";
			divCanvas.style.width = window.innerWidth+"px";
			divCanvas.style.height=window.innerHeight+"px";
			canvas.width =window.innerWidth;
			canvas.height=window.innerHeight;
			window.addEventListener('resize',resizeCanvas);
		}
		resizeCanvas = function(){
			var i,grp;
			savedLists=[];
			if (typeof groups=='undefined') return;
			if (canvasPage.style.display=='none') return;
			inResize = true;
			// save groups with move than one tile
			canvasPage.style.width = window.innerWidth+"px";
			canvasPage.style.height=window.innerHeight+"px";
			divCanvas.style.width = window.innerWidth+"px";
			divCanvas.style.height=window.innerHeight+"px";
			canvas.width =window.innerWidth;
			canvas.height=window.innerHeight;
			savedLists = Object.assign([],groups.list);
			//for (i=0;i<groups.list.length;i++) {
			//	grp=groups.list[i];
			//	if (grp.list.length==1) continue;
			//	savedLists.push(Object.assign([],grp))
			//}
			// setup puzzle as new
			setupPuzzle();
		}
		resizeCanvasStep2=function() {	
			var i,j,k,grp,g,list,t;
			inResize = false;
			// pretend to solve for previous 
			for (i=0;i<savedLists.length;i++) {
				g=savedLists[i];
				for (j=0;j<g.list.length;j++) {
					t=g.list[j]
					if (t.type!=0) continue;;
					for (k=0;k<groups.list.length;k++) {
						grp=groups.list[k];
						// find matching group in groups & savedList of groups
						if (grp.list[0].shape.row!=t.shape.row || 
							grp.list[0].shape.column!=t.shape.column) continue;
						if (g.list.length==1) {		
							while (grp.direction!=g.direction) grp.rotate90();  // keep previous rotation 
							continue;
						}
						// rotate group to north
						while (grp.direction!='N') grp.rotate90();
						// set group to solved position
						grp.position=
							{x:tiles.topLeftCorner.x+t.shape.column*tiles.tileWidth -tiles.tileWidthPadding+tiles.imageOffset.x,
							 y:tiles.topLeftCorner.y+t.shape.row   *tiles.tileHeight-tiles.tileHeightPadding+tiles.imageOffset.y};
						grp.list[0].position=grp.position;
						grp.list[0].setBoundingRect(grp.position);  // set tile position to group position.	 
						// combine single group/tile into larger group/tiles;
						grp.getContext();
						if (groups.checkMatches(grp)) {
							groups.showPuzzleOutline();
						}
					}
				}
			}
			savedLists = '';
		}
/*		newFileInput = function(event) {
			if (event.currentTarget.files.length==0) return;
			var reader = new FileReader();
			reader.onload = function (e) {
				$("#control_09").css({display:'block'}).find('input').click();
				$('#picture9').attr('src',e.target.result);
				$('.fSelect').css({display:'none'})
			}
			reader.readAsDataURL(event.currentTarget.files[0]);
		}
*/
		handleIconDown = function(event) {
			event.preventDefault();
			event.cancelBubble=true;
			$('#puzzle-image').addClass('showPuzzleOutline');
			event.returnValue=false;
		} 
		handleIconUp=function(event) {
			event.preventDefault();
			event.returnValue=false;
			$('#puzzle-image').removeClass('showPuzzleOutline');
		}
		setupPuzzle = function(){ 
			var iw,ih,imageFoo,canvasFoo; 
			var img = document.getElementById("puzzle-image1")
			var imgPat = document.getElementById("paper");
			var pat = context.createPattern(imgPat, "repeat");
			var naturalRatio = img.naturalWidth/img.naturalHeight;
			$('#puzzle-image').remove();
			$('.tileCanvas').remove();
			context.fillStyle=pat;
			context.fillRect(0,0,canvas.width,canvas.height);
			tiles.list=[];groups.list=[];
			if (naturalRatio>1.46) tiles.rowColRatio=[5,3];
			else if (naturalRatio>1.13) tiles.rowColRatio=[5,4];
			else if (naturalRatio>0.90) tiles.rowColRatio=[4,4];
			else if (naturalRatio>0.70) tiles.rowColRatio=[4,5];
			else				        tiles.rowColRatio=[3,5];
			//canvasRatio = canvas.width/canvas.height;
			var imgSize = calcImageSize(img);
			iw=imgSize.width; ih = imgSize.height;
			img.width = iw;img.height=ih;
			
			imageFoo = document.createElement('img');
			canvasFoo= document.createElement('canvas');
			canvasFoo.width=iw;
			canvasFoo.height=ih;
			contextFoo=canvasFoo.getContext('2d');
			context.imageSmoothingEnabled = true;
			context.imageSmoothingQuality = 'high';
			
			contextFoo.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,0,0,iw,ih);
			context.imageSmoothingEnabled = false;
			dataUrl = canvasFoo.toDataURL(),
			imageFoo.style.width=iw;
			imageFoo.style.height=ih;
			//imageFoo.style.display='none';
			imageFoo.id="puzzle-image";
			imageFoo.onload=function(){
				tiles.initialize(document.getElementById("puzzle-image"));
				if (inResize) resizeCanvasStep2();
			}
			imageFoo.src = dataUrl;
			$('#divCanvas').append(imageFoo); 
			cavasFoo=''; 
		}

		 function calcImageSize(img) {
			// set image contain to 80+ percent of window width and height
			// BUT make sure that image area is no more than 40% of window area
			var imageSize={},imageArea={};
			var imageContainer = {width:window.innerWidth*0.88, height:window.innerHeight*0.88}
			var windowArea = window.innerWidth*window.innerHeight;
			var imageRatio = img.naturalWidth/img.naturalHeight;
			do {
				imageContainer.width*=0.95;
				imageContainer.height*=0.95;
				containerRatio = imageContainer.width/imageContainer.height;
				if (imageRatio>containerRatio) {
					imageSize.width = imageContainer.width
					imageSize.height= imageContainer.width/imageRatio;
				}
				else {
					imageSize.width = imageRatio*imageContainer.height
					imageSize.height= imageContainer.height;
				}
				imageArea=imageSize.width*imageSize.height;

			} while (imageArea>windowArea*0.3)
			return imageSize;
		}	



