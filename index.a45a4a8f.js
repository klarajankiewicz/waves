function r(r){return r&&r.__esModule?r.default:r}var t,e={};!function(){var r=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6,o=1/6,i=(Math.sqrt(5)-1)/4,n=(5-Math.sqrt(5))/20;function l(r){var t;t="function"==typeof r?r:r?function(){var r=0,t=0,e=0,a=1,o=h();r=o(" "),t=o(" "),e=o(" ");for(var i=0;i<arguments.length;i++)(r-=o(arguments[i]))<0&&(r+=1),(t-=o(arguments[i]))<0&&(t+=1),(e-=o(arguments[i]))<0&&(e+=1);return o=null,function(){var o=2091639*r+2.3283064365386963e-10*a;return r=t,t=e,e=o-(a=0|o)}}(r):Math.random,this.p=f(t),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var e=0;e<512;e++)this.perm[e]=this.p[255&e],this.permMod12[e]=this.perm[e]%12}function f(r){var t,e=new Uint8Array(256);for(t=0;t<256;t++)e[t]=t;for(t=0;t<255;t++){var a=t+~~(r()*(256-t)),o=e[t];e[t]=e[a],e[a]=o}return e}function h(){var r=4022871197;return function(t){t=t.toString();for(var e=0;e<t.length;e++){var a=.02519603282416938*(r+=t.charCodeAt(e));a-=r=a>>>0,r=(a*=r)>>>0,r+=4294967296*(a-=r)}return 2.3283064365386963e-10*(r>>>0)}}l.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(t,e){var o,i,n=this.permMod12,l=this.perm,f=this.grad3,h=0,d=0,s=0,v=(t+e)*r,c=Math.floor(t+v),u=Math.floor(e+v),p=(c+u)*a,M=t-(c-p),w=e-(u-p);M>w?(o=1,i=0):(o=0,i=1);var m=M-o+a,g=w-i+a,S=M-1+2*a,y=w-1+2*a,P=255&c,b=255&u,C=.5-M*M-w*w;if(C>=0){var A=3*n[P+l[b]];h=(C*=C)*C*(f[A]*M+f[A+1]*w)}var q=.5-m*m-g*g;if(q>=0){var D=3*n[P+o+l[b+i]];d=(q*=q)*q*(f[D]*m+f[D+1]*g)}var x=.5-S*S-y*y;if(x>=0){var F=3*n[P+1+l[b+1]];s=(x*=x)*x*(f[F]*S+f[F+1]*y)}return 70*(h+d+s)},noise3D:function(r,t,e){var a,i,n,l,f,h,d,s,v,c,u=this.permMod12,p=this.perm,M=this.grad3,w=.3333333333333333*(r+t+e),m=Math.floor(r+w),g=Math.floor(t+w),S=Math.floor(e+w),y=(m+g+S)*o,P=r-(m-y),b=t-(g-y),C=e-(S-y);P>=b?b>=C?(f=1,h=0,d=0,s=1,v=1,c=0):P>=C?(f=1,h=0,d=0,s=1,v=0,c=1):(f=0,h=0,d=1,s=1,v=0,c=1):b<C?(f=0,h=0,d=1,s=0,v=1,c=1):P<C?(f=0,h=1,d=0,s=0,v=1,c=1):(f=0,h=1,d=0,s=1,v=1,c=0);var A=P-f+o,q=b-h+o,D=C-d+o,x=P-s+2*o,F=b-v+2*o,L=C-c+2*o,U=P-1+.5,_=b-1+.5,k=C-1+.5,G=255&m,I=255&g,N=255&S,T=.6-P*P-b*b-C*C;if(T<0)a=0;else{var W=3*u[G+p[I+p[N]]];a=(T*=T)*T*(M[W]*P+M[W+1]*b+M[W+2]*C)}var z=.6-A*A-q*q-D*D;if(z<0)i=0;else{var E=3*u[G+f+p[I+h+p[N+d]]];i=(z*=z)*z*(M[E]*A+M[E+1]*q+M[E+2]*D)}var H=.6-x*x-F*F-L*L;if(H<0)n=0;else{var R=3*u[G+s+p[I+v+p[N+c]]];n=(H*=H)*H*(M[R]*x+M[R+1]*F+M[R+2]*L)}var j=.6-U*U-_*_-k*k;if(j<0)l=0;else{var B=3*u[G+1+p[I+1+p[N+1]]];l=(j*=j)*j*(M[B]*U+M[B+1]*_+M[B+2]*k)}return 32*(a+i+n+l)},noise4D:function(r,t,e,a){var o,l,f,h,d,s,v,c,u,p,M,w,m,g,S,y,P,b=this.perm,C=this.grad4,A=(r+t+e+a)*i,q=Math.floor(r+A),D=Math.floor(t+A),x=Math.floor(e+A),F=Math.floor(a+A),L=(q+D+x+F)*n,U=r-(q-L),_=t-(D-L),k=e-(x-L),G=a-(F-L),I=0,N=0,T=0,W=0;U>_?I++:N++,U>k?I++:T++,U>G?I++:W++,_>k?N++:T++,_>G?N++:W++,k>G?T++:W++;var z=U-(s=I>=3?1:0)+n,E=_-(v=N>=3?1:0)+n,H=k-(c=T>=3?1:0)+n,R=G-(u=W>=3?1:0)+n,j=U-(p=I>=2?1:0)+2*n,B=_-(M=N>=2?1:0)+2*n,J=k-(w=T>=2?1:0)+2*n,K=G-(m=W>=2?1:0)+2*n,O=U-(g=I>=1?1:0)+3*n,Q=_-(S=N>=1?1:0)+3*n,V=k-(y=T>=1?1:0)+3*n,X=G-(P=W>=1?1:0)+3*n,Y=U-1+4*n,Z=_-1+4*n,$=k-1+4*n,rr=G-1+4*n,tr=255&q,er=255&D,ar=255&x,or=255&F,ir=.6-U*U-_*_-k*k-G*G;if(ir<0)o=0;else{var nr=b[tr+b[er+b[ar+b[or]]]]%32*4;o=(ir*=ir)*ir*(C[nr]*U+C[nr+1]*_+C[nr+2]*k+C[nr+3]*G)}var lr=.6-z*z-E*E-H*H-R*R;if(lr<0)l=0;else{var fr=b[tr+s+b[er+v+b[ar+c+b[or+u]]]]%32*4;l=(lr*=lr)*lr*(C[fr]*z+C[fr+1]*E+C[fr+2]*H+C[fr+3]*R)}var hr=.6-j*j-B*B-J*J-K*K;if(hr<0)f=0;else{var dr=b[tr+p+b[er+M+b[ar+w+b[or+m]]]]%32*4;f=(hr*=hr)*hr*(C[dr]*j+C[dr+1]*B+C[dr+2]*J+C[dr+3]*K)}var sr=.6-O*O-Q*Q-V*V-X*X;if(sr<0)h=0;else{var vr=b[tr+g+b[er+S+b[ar+y+b[or+P]]]]%32*4;h=(sr*=sr)*sr*(C[vr]*O+C[vr+1]*Q+C[vr+2]*V+C[vr+3]*X)}var cr=.6-Y*Y-Z*Z-$*$-rr*rr;if(cr<0)d=0;else{var ur=b[tr+1+b[er+1+b[ar+1+b[or+1]]]]%32*4;d=(cr*=cr)*cr*(C[ur]*Y+C[ur+1]*Z+C[ur+2]*$+C[ur+3]*rr)}return 27*(o+l+f+h+d)}},l._buildPermutationTable=f,void 0!==e?(t=l,e.SimplexNoise=t):"undefined"!=typeof window&&(window.SimplexNoise=l),e=l}();var a=r(e);let o,i,n,l,f,h,d,s=0,v=0;function c(){n=new a,l=o.width=1*window.innerWidth,f=o.height=1*window.innerHeight,h=i.createLinearGradient(0,0,l,.5*l),h.addColorStop(0,"#a6c8ff"),h.addColorStop(.5,"#535cbc"),h.addColorStop(1,"#4a0031"),d=i.createLinearGradient(0,0,.8*l,l),d.addColorStop(0,"#5584c4"),d.addColorStop(.5,"#2d2666"),d.addColorStop(1,"#d4111b")}function u(r){i.beginPath(),i.arc(1200,575,60,0,2*Math.PI),i.fillStyle=r,i.fill(),i.closePath()}o=document.querySelector("#canvas"),i=o.getContext("2d"),window.addEventListener("resize",c),c(),function r(){requestAnimationFrame(r);let t=Date.now();var e;s+=(t-v)/1500,v=t,i.fillStyle=h,i.lineWidth=2,i.fillRect(0,0,l,f),e="#a4bcff",i.beginPath(),i.arc(250,275,150,0,2*Math.PI),i.fillStyle=e,i.fill(),i.closePath();for(let r=-15;r<f+15;r+=8){i.beginPath(),i.strokeStyle=d;for(let t=-15;t<l+15;t+=3){let e=15*n.noise3D(t/150,r/150,s),a=45*n.noise3D(t/150+1e3,r/150+1e3,s);i.lineTo(t+e,r+a)}i.stroke(),i.closePath(),u("#f22c2c")}}();
//# sourceMappingURL=index.a45a4a8f.js.map
