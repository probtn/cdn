.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _admin_targetings:
 
Description of targeting variants at admin.probtn.com
==================================

Base description
----------------------------------

Using targetings possible to set nessesary restrictions for group or some specific creative (with possibility of creating logical constructions, nessesary for complex targeting).

Variants
----------------------------------

Always
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Default targeting.

Show all time.

Country
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by user's country.

Possible conditions:

* is
* is not

Options:

* -Other-
* Russia
* USA

Mobile Operator
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by mobile operator.

Possible conditions:

* is
* is not

Options:

* MTS RUS
* Beeline
* Megafon

City
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by user's city.

Possible conditions:

* one of
* except

Schedule
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by schedule.
Give calendar to set time periods for each day of the week.

Possible conditions:

* on

Once in
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting with show limit to user (show button once in period).

Possible conditions:

* in

Options:

* 1 minute
* 6 hours
* 1 day
* 2 day
* 3 day
* 4 day
* 5 day
* 6 day
* 7 day

Campaign shown
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by showing this creative to user (works if this user never see this creative before).

Possible conditions:

* for

Options:

* first time
* more then once

Show limit
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Limit count of shows to user.

Possible conditions:

* =

Options:

* 1
* 2
* 3
* 4
* 5

Target action
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Possible conditions:

* was

Options:

* performed
* not performed

Device platform
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by device types.

Possible conditions:

* is

Options:

* -- Any Mobile --
* [mobile] iOS
* [mobile] Android
* [mobile] WinPhone
* [mobile] Other
* -- Any Tablet --
* [tablet] iOS
* [tablet] Android
* [tablet] WinPhone
* [tablet] Other
* -- Any Desktop --
* Mac OS X
* Ubuntu
* Windows
* Other

Site pages
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by relative page path where button shown.

Possible conditions:

* is exactly
* starts with
* is not
* doesnt start with

IP adress
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting base on user's ID address.

Possible conditions:

* one of
* none of

Options:

* ip address or list of IP adresses separated by comma.

Button closing max
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by button close count.

Possible conditions:

* is

Options:

* once per campaign
* once per day

Overall shows limit
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by total shows.

Possible conditions:

* is

Options:

* shows count

Daily shows limit
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by daily show count.

Possible conditions:

* is

Options:

* shows count

Device Model
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by device model.

Possible conditions:

* is
* is not

Options:

* iPhone 4 / 4s
* iPhone 5 / 5s / 6 (with display zoom)
* iPhone 6 / 6s (with display zoom)
* iPhone 6+
* -- Other --

Domains
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by domain.

Possible conditions:

* one of
* none of

Options:

* domain or list of domains separated by commas.

Start at
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by start date and time.

Options:

* date and time in format yyyy/mm/dd HH:MM:SS

Stop at
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by end date and time.

Options:

* date and time in format yyyy/mm/dd HH:MM:SS

Connection speed
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Targeting by connection speed (possible only in case if in probtn script manualy turned on mode which mesuares connection speed).

Options:

* connetion speed range

Additional parameter
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Manual\custom targeting - allow to make targeting based on manual param set in probtn script.

Possible conditions:

* equals
* contains

Options:

* any param for custom targeting.