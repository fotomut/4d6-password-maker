BEGIN {
    print "{\n";
}
{
    printf "\t\"%s\": \"%s\",\n", $1, $2;
}
END {
    print "}";
}