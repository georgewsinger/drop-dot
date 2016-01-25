goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__66908__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__66908 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66909__i = 0, G__66909__a = new Array(arguments.length -  0);
while (G__66909__i < G__66909__a.length) {G__66909__a[G__66909__i] = arguments[G__66909__i + 0]; ++G__66909__i;}
  args = new cljs.core.IndexedSeq(G__66909__a,0);
} 
return G__66908__delegate.call(this,args);};
G__66908.cljs$lang$maxFixedArity = 0;
G__66908.cljs$lang$applyTo = (function (arglist__66910){
var args = cljs.core.seq(arglist__66910);
return G__66908__delegate(args);
});
G__66908.cljs$core$IFn$_invoke$arity$variadic = G__66908__delegate;
return G__66908;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__66911__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__66911 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66912__i = 0, G__66912__a = new Array(arguments.length -  0);
while (G__66912__i < G__66912__a.length) {G__66912__a[G__66912__i] = arguments[G__66912__i + 0]; ++G__66912__i;}
  args = new cljs.core.IndexedSeq(G__66912__a,0);
} 
return G__66911__delegate.call(this,args);};
G__66911.cljs$lang$maxFixedArity = 0;
G__66911.cljs$lang$applyTo = (function (arglist__66913){
var args = cljs.core.seq(arglist__66913);
return G__66911__delegate(args);
});
G__66911.cljs$core$IFn$_invoke$arity$variadic = G__66911__delegate;
return G__66911;
})()
;

return null;
});
