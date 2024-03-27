#!/bin/bash
if command -v curl &> /dev/null; then
	url1="http://$1:$2/api/user/admin/req";
	curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer $3" $url1;

	url2="http://$1:$2/api/credential/";
	curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer $3" $url2;

	url3="http://$1:$2/api/feedback/";
	curl -X GET -H "Content-Type: application/json" $url3;

	url4="http://$1:$2/api/guestRequest/admin/statusStatistics";
	curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer $3" $url4;

	url5="http://$1:$2/api/commentingApplication/";
	curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer $3" $url5;
	exit 1
else
	echo "You need to install curl"
	exit 1
fi
