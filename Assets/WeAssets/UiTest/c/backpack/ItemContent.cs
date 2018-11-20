using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class ItemContent : MonoBehaviour {

    Text ItemText;
    float tryagain;
    string[] Content=new string[3];
    private Coroutine coRou;

    private void Start()
    {
        ItemText = GetComponent<Text>();
        Content[0] = "只是個正方形";
        Content[1] = "聰明的玉米粒(未熟)";
        Content[2] = "香菇，可以吃";
    }

    public void OnText(int ItemName)
    {
        if(coRou!=null)
        StopCoroutine(coRou);
        coRou=StartCoroutine(T(ItemName));
    }

    IEnumerator T(int ItemName)
    {
        for (int i = 0; i <= 3; i++)
        {
            if (ItemName == i)
                ItemText.text = Content[i];
        }
        yield return new WaitForSeconds(1.5f);
        ItemText.text = "";
    }
}
