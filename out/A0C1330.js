goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__252222__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__252222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__252223__i = 0, G__252223__a = new Array(arguments.length -  0);
while (G__252223__i < G__252223__a.length) {G__252223__a[G__252223__i] = arguments[G__252223__i + 0]; ++G__252223__i;}
  args = new cljs.core.IndexedSeq(G__252223__a,0);
} 
return G__252222__delegate.call(this,args);};
G__252222.cljs$lang$maxFixedArity = 0;
G__252222.cljs$lang$applyTo = (function (arglist__252224){
var args = cljs.core.seq(arglist__252224);
return G__252222__delegate(args);
});
G__252222.cljs$core$IFn$_invoke$arity$variadic = G__252222__delegate;
return G__252222;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__252225__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__252225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__252226__i = 0, G__252226__a = new Array(arguments.length -  0);
while (G__252226__i < G__252226__a.length) {G__252226__a[G__252226__i] = arguments[G__252226__i + 0]; ++G__252226__i;}
  args = new cljs.core.IndexedSeq(G__252226__a,0);
} 
return G__252225__delegate.call(this,args);};
G__252225.cljs$lang$maxFixedArity = 0;
G__252225.cljs$lang$applyTo = (function (arglist__252227){
var args = cljs.core.seq(arglist__252227);
return G__252225__delegate(args);
});
G__252225.cljs$core$IFn$_invoke$arity$variadic = G__252225__delegate;
return G__252225;
})()
;

return null;
});
