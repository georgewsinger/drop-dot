goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__262367__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__262367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__262368__i = 0, G__262368__a = new Array(arguments.length -  0);
while (G__262368__i < G__262368__a.length) {G__262368__a[G__262368__i] = arguments[G__262368__i + 0]; ++G__262368__i;}
  args = new cljs.core.IndexedSeq(G__262368__a,0);
} 
return G__262367__delegate.call(this,args);};
G__262367.cljs$lang$maxFixedArity = 0;
G__262367.cljs$lang$applyTo = (function (arglist__262369){
var args = cljs.core.seq(arglist__262369);
return G__262367__delegate(args);
});
G__262367.cljs$core$IFn$_invoke$arity$variadic = G__262367__delegate;
return G__262367;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__262370__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__262370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__262371__i = 0, G__262371__a = new Array(arguments.length -  0);
while (G__262371__i < G__262371__a.length) {G__262371__a[G__262371__i] = arguments[G__262371__i + 0]; ++G__262371__i;}
  args = new cljs.core.IndexedSeq(G__262371__a,0);
} 
return G__262370__delegate.call(this,args);};
G__262370.cljs$lang$maxFixedArity = 0;
G__262370.cljs$lang$applyTo = (function (arglist__262372){
var args = cljs.core.seq(arglist__262372);
return G__262370__delegate(args);
});
G__262370.cljs$core$IFn$_invoke$arity$variadic = G__262370__delegate;
return G__262370;
})()
;

return null;
});
