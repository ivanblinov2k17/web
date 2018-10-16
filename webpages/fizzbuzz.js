function fizzbuzz(n)
{
    if (n%15==0)
    {
       console.log('fizzbuzz') 
    }
    else if (n%3==0)
    {
        console.log('fizz');
    }
    else if (n%5==0)
    {
        console.log('buzz');
    }
    else
    {
        console.log(n);
    }
}
fizzbuzz(5)