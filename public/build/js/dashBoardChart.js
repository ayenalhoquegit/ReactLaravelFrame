 /* ECHRTS */
  
    
    function init_echarts() {
    
      if( typeof (echarts) === 'undefined'){ return; }
      console.log('init_echarts');
      
    
      var theme = {
        color: [
          '#26B99A', '#E10707', '#BDC3C7', '#3498DB',
          '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
        ],

        title: {
          itemGap: 8,
          textStyle: {
            fontWeight: 'normal',
            color: '#408829'
          }
        },

        dataRange: {
          color: ['#1f610a', '#97b58d']
        },

        toolbox: {
          color: ['#408829', '#408829', '#408829', '#408829']
        },

        tooltip: {
          backgroundColor: 'rgba(0,0,0,0.5)',
          axisPointer: {
            type: 'line',
            lineStyle: {
              color: '#408829',
              type: 'dashed'
            },
            crossStyle: {
              color: '#408829'
            },
            shadowStyle: {
              color: 'rgba(200,200,200,0.3)'
            }
          }
        },

        dataZoom: {
          dataBackgroundColor: '#eee',
          fillerColor: 'rgba(64,136,41,0.2)',
          handleColor: '#408829'
        },
        grid: {
          borderWidth: 0
        },

        categoryAxis: {
          axisLine: {
            lineStyle: {
              color: '#408829'
            }
          },
          splitLine: {
            lineStyle: {
              color: ['#eee']
            }
          }
        },

        valueAxis: {
          axisLine: {
            lineStyle: {
              color: '#408829'
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
            }
          },
          splitLine: {
            lineStyle: {
              color: ['#eee']
            }
          }
        },
        timeline: {
          lineStyle: {
            color: '#408829'
          },
          controlStyle: {
            normal: {color: '#408829'},
            emphasis: {color: '#408829'}
          }
        },

        k: {
          itemStyle: {
            normal: {
              color: '#68a54a',
              color0: '#a9cba2',
              lineStyle: {
                width: 1,
                color: '#408829',
                color0: '#86b379'
              }
            }
          }
        },
        map: {
          itemStyle: {
            normal: {
              areaStyle: {
                color: '#ddd'
              },
              label: {
                textStyle: {
                  color: '#c12e34'
                }
              }
            },
            emphasis: {
              areaStyle: {
                color: '#99d2dd'
              },
              label: {
                textStyle: {
                  color: '#c12e34'
                }
              }
            }
          }
        },
        force: {
          itemStyle: {
            normal: {
              linkStyle: {
                strokeColor: '#408829'
              }
            }
          }
        },
        chord: {
          padding: 4,
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1,
                color: 'rgba(128, 128, 128, 0.5)'
              },
              chordStyle: {
                lineStyle: {
                  width: 1,
                  color: 'rgba(128, 128, 128, 0.5)'
                }
              }
            },
            emphasis: {
              lineStyle: {
                width: 1,
                color: 'rgba(128, 128, 128, 0.5)'
              },
              chordStyle: {
                lineStyle: {
                  width: 1,
                  color: 'rgba(128, 128, 128, 0.5)'
                }
              }
            }
          }
        },
        gauge: {
          startAngle: 225,
          endAngle: -45,
          axisLine: {
            show: true,
            lineStyle: {
              color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
              width: 8
            }
          },
          axisTick: {
            splitNumber: 10,
            length: 12,
            lineStyle: {
              color: 'auto'
            }
          },
          axisLabel: {
            textStyle: {
              color: 'auto'
            }
          },
          splitLine: {
            length: 18,
            lineStyle: {
              color: 'auto'
            }
          },
          pointer: {
            length: '90%',
            color: 'auto'
          },
          title: {
            textStyle: {
              color: '#333'
            }
          },
          detail: {
            textStyle: {
              color: 'auto'
            }
          }
        },
        textStyle: {
          fontFamily: 'Arial, Verdana, sans-serif'
        }
      };

        
      /*Start THIS YEAR ALL EXAM Exam Wise Pass/Fail (%)  here*/
      if ($('#curentYearResultChart').length ){
        
          var echartBar = echarts.init(document.getElementById('curentYearResultChart'), theme);
         

         


          echartBar.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Pass', 'Fail']
          },
          toolbox: {
            show: false
          },
          calculable: false,
          xAxis: [{
            type: 'category',
            data: months
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
            name: 'Pass',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0],
                      
          }, {
            name: 'Fail',
            type: 'bar',
            data: [2,4,1,8,10,3,18,18,20,1],
          }]
          });

      }
      /*End THIS YEAR ALL EXAM Exam Wise Pass/Fail (%)  here*/


      /*Start Class Wise Student here*/
      if ($('#classWiseStudent').length ){
        
          var echartBar = echarts.init(document.getElementById('classWiseStudent'), theme);

          echartBar.setOption({
          
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Male', 'Female']
          },
          toolbox: {
            show: false
          },
          calculable: false,
          xAxis: [{
            type: 'category',
            data: months
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
            name: 'Male',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0],
            markPoint: {
            data: [{
              type: 'max',
              name: 'Student'
            }, {
              type: 'min',
              name: 'Student'
            }]
            }
           
          }, {
            name: 'Female',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8],
           markPoint: {
            data: [{
              name: 'Student',
              value: 182.2,
              xAxis: 7,
              yAxis: 183,
            }, {
              name: 'Student',
              value: 2.3,
              xAxis: 11,
              yAxis: 3
            }]
            }
          }]
          });

      }
      /*End Class Wise Student here*/
        
     
    }  
     


    function init_charts() {
      
        console.log('run_charts  typeof [' + typeof (Chart) + ']');
      
        if( typeof (Chart) === 'undefined'){ return; }
        
        console.log('init_charts');
      
        
        Chart.defaults.global.legend = {
          enabled: false
        };
      
       
      /*Start LAST YEAR FINAL EXAM Exam Wise Pass/Fail*/

      if ($('#lastYearResult').length ){ 
        
        var ctx = document.getElementById("lastYearResult");
        var lastYearResult = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["One", "Two", "Three", "Four", "Five", "Six", "Seven","Eight","Nine","Ten"],
          datasets: [{
          label: 'Pass of Student',
          backgroundColor: "#26B99A",
          data: [51, 30, 40, 28, 92, 50, 45,33,23,1]
          }, {
          label: 'Fail of Student',
          backgroundColor: "red",
          data: [12, 33, 1, 2, 4, 1, 2,3,4,1]
          }]
        },

        options: {
          scales: {
          yAxes: [{
            ticks: {
            beginAtZero: true
            }
          }]
          }
        }
        });
        
      } 
      /*End LAST YEAR FINAL EXAM Exam Wise Pass/Fail*/
      
    }

    
    
  $(document).ready(function() {



        
    init_echarts();
    init_charts();
   
    
        
  }); 