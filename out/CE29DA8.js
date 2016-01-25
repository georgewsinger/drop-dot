goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12550__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12551__i = 0, G__12551__a = new Array(arguments.length -  0);
while (G__12551__i < G__12551__a.length) {G__12551__a[G__12551__i] = arguments[G__12551__i + 0]; ++G__12551__i;}
  args = new cljs.core.IndexedSeq(G__12551__a,0);
} 
return G__12550__delegate.call(this,args);};
G__12550.cljs$lang$maxFixedArity = 0;
G__12550.cljs$lang$applyTo = (function (arglist__12552){
var args = cljs.core.seq(arglist__12552);
return G__12550__delegate(args);
});
G__12550.cljs$core$IFn$_invoke$arity$variadic = G__12550__delegate;
return G__12550;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12553__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12554__i = 0, G__12554__a = new Array(arguments.length -  0);
while (G__12554__i < G__12554__a.length) {G__12554__a[G__12554__i] = arguments[G__12554__i + 0]; ++G__12554__i;}
  args = new cljs.core.IndexedSeq(G__12554__a,0);
} 
return G__12553__delegate.call(this,args);};
G__12553.cljs$lang$maxFixedArity = 0;
G__12553.cljs$lang$applyTo = (function (arglist__12555){
var args = cljs.core.seq(arglist__12555);
return G__12553__delegate(args);
});
G__12553.cljs$core$IFn$_invoke$arity$variadic = G__12553__delegate;
return G__12553;
})()
;

return null;
});
