
import os
import locale
from dialog import Dialog

locale.setlocale(locale.LC_ALL, '')

startup = Dialog(dialog="dialog")
startup.set_background_title("Hello")

if startup.yesno("Are you REALLY sure you want to see this?") == startup.OK:
	startup.msgbox("You have been warned...")
	
	code, tags = startup.checklist("What sandwich toppings do you like?",
			choices=[("Catsup", "", False)],
			title="Do you prefer ham or spam?",
			backtitle="And now, for something "
			"completely different...")
	if code == startup.OK:
		pass
else:
	code, tag = startup.menu("OK, then you have two options:",
			choices=[("(1)","Leave this fascinating example"),
				("(2)","Leave this fascinating example")])
	if code == startup.OK:
		pass

