goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20108__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20109__i = 0, G__20109__a = new Array(arguments.length -  0);
while (G__20109__i < G__20109__a.length) {G__20109__a[G__20109__i] = arguments[G__20109__i + 0]; ++G__20109__i;}
  args = new cljs.core.IndexedSeq(G__20109__a,0);
} 
return G__20108__delegate.call(this,args);};
G__20108.cljs$lang$maxFixedArity = 0;
G__20108.cljs$lang$applyTo = (function (arglist__20110){
var args = cljs.core.seq(arglist__20110);
return G__20108__delegate(args);
});
G__20108.cljs$core$IFn$_invoke$arity$variadic = G__20108__delegate;
return G__20108;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20111__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20112__i = 0, G__20112__a = new Array(arguments.length -  0);
while (G__20112__i < G__20112__a.length) {G__20112__a[G__20112__i] = arguments[G__20112__i + 0]; ++G__20112__i;}
  args = new cljs.core.IndexedSeq(G__20112__a,0);
} 
return G__20111__delegate.call(this,args);};
G__20111.cljs$lang$maxFixedArity = 0;
G__20111.cljs$lang$applyTo = (function (arglist__20113){
var args = cljs.core.seq(arglist__20113);
return G__20111__delegate(args);
});
G__20111.cljs$core$IFn$_invoke$arity$variadic = G__20111__delegate;
return G__20111;
})()
;

return null;
});
