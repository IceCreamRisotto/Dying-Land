using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using Fungus;

public class GameManager : MonoBehaviour {

    public GameObject menu;
    public Transform ItemTransform1;
    public Transform ItemTransform2;
    public Transform ItemTransform3;
    private Transform[] ItemTransform=new Transform[3];
    public GameObject Item1;
    public GameObject Item2;
    public GameObject Item3;
    private GameObject[] Item=new GameObject[3];
    public Flowchart fc;

    private void Awake()
    {
        ItemTransform[0] = ItemTransform1;
        ItemTransform[1] = ItemTransform2;
        ItemTransform[2] = ItemTransform3;
        Item[0] = Item1;
        Item[1] = Item2;
        Item[2] = Item3;
    }

    public void ItemMove(int ItemNo)
    {
        for(int i=0;i<=2;i++)
        {
            if (ItemTransform[i]!=null)
            {
                Item[ItemNo].transform.position = ItemTransform[i].position;
                ItemTransform[i] = null;
                break;
            }
        }
        
    }
    

    public void OnMenu()
    {
        if (!menu.activeInHierarchy)
            menu.SetActive(true);
        else
            menu.SetActive(false);
    }

    public void ReStartGame()
    {
        SceneManager.LoadScene(SceneManager.GetSceneAt(0).name);
    }
}
