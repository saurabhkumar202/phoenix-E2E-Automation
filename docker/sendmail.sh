#!/bin/bash
echo "E2E reports are ready, please check https://iotu-e2e.review.ptcusys.com/" | mail -a "From: Gitlab-ci <gitlab-ci@ptc.com>" -s "E2E test coverage reports" dghan@ptc.com mbenur@ptc.com bgupta@ptc.com varora@ptc.com mjain@ptc.com rakumar@ptc.com mrahil@ptc.com pankumar@ptc.com hbharadwaj@ptc.com saukumar@ptc.com
service postfix restart
service nginx start
