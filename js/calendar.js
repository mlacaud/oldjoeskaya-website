$(document).ready(function() {

		$('#calendar').fullCalendar({

			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,listYear'
			},

			displayEventTime: true, // don't show the time column in list view

      defaultView: 'month',

			lang: 'fr',

			// THIS KEY WON'T WORK IN PRODUCTION!!!
			// To make your own Google API key, follow the directions here:
			// http://fullcalendar.io/docs/google_calendar/
			googleCalendarApiKey: 'AIzaSyARf5liewf2n1ShLzS0O7KcPgd0g_WtGVM',

			// US Holidays
			events: 'http://www.google.com/calendar/feeds/contact%40oldjoeskaya.fr/public/basic',

			eventClick: function(event) {
				// opens events in a popup window
				window.open(event.url, 'gcalevent', 'width=700,height=600');
				return false;
			},

			loading: function(bool) {
				$('#loading').toggle(bool);
			}

		});

	});
