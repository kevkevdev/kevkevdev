$(document).ready(function(){
	setTimeout(function(){
		$('#wel').typed({
		    strings: ['Hey There!','Welcome!',''],
		    typeSpeed: 80,
		    backSpeed: 20,
	    	backDelay: 1200,
		    showCursor: false,
		    contentType: 'text',
		});
	},800);
	setTimeout(function(){
		$('#resCP').removeClass("hide");
		$('#resCP').addClass("animated fadeIn");
		
			// function grafico(){
				var ctx = document.getElementById("myChart");
					var myChart = new Chart(ctx, {
					    type: 'horizontalBar',
					    data: {
					        labels: ["NodeJS", "AngularJS", "MEAN Dev", "Javascript", "jQuery", "SCSS", "MYSQL", "Adobe Photoshop", "Adobe Premiere"],
					        datasets: [{
					            label: 'My Skills',
					            data: [7, 8, 6, 8, 8, 7, 6, 6.5, 6.5],
					            backgroundColor: [
					            	"rgba(153, 190, 79, 0.8)",
					                'rgba(255, 99, 132, 0.8)',
					                "rgba(75, 38, 75, 0.8)",				               
					                'rgba(54, 162, 235, 0.8)',
					                'rgba(233, 104, 104, 0.8)',
					                'rgba(253, 168, 155, 0.8)',
					                'rgba(253, 212, 199, 0.8)',
					                'rgba(66, 120, 160, 0.8)',
					                'rgba(159, 63, 104, 0.8)'
					            ],
					            hoverBackgroundColor: [
					            	"rgba(153, 190, 79, 0.8)",
					                "rgba(255, 99, 132, 0.8)",
					                "rgba(75, 38, 75, 0.8)",
					                "rgba(54, 162, 235, 0.8)",
					                "rgba(233, 104, 104, 0.8)",
					                "rgba(253, 168, 155, 0.8)",
					                "rgba(253, 212, 199, 0.8)",
					                "rgba(66, 120, 160, 0.8)",
					                "rgba(159, 63, 104, 0.8)"
					            ]				            
					        }]
					    },
					    options: {
					    	responsive: true,
					        scales: {
					            xAxes: [{
					            	display: true,
					                ticks: {
					                    beginAtZero:true,
					                    max:10
					                }
					            }]
					        }
					    }
					});
				// };

	},7000);

	
    	$('.tooltipped').tooltip({delay: 50});
  		$('.modal-trigger').leanModal();
});