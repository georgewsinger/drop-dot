goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__311479__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__311479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__311480__i = 0, G__311480__a = new Array(arguments.length -  0);
while (G__311480__i < G__311480__a.length) {G__311480__a[G__311480__i] = arguments[G__311480__i + 0]; ++G__311480__i;}
  args = new cljs.core.IndexedSeq(G__311480__a,0);
} 
return G__311479__delegate.call(this,args);};
G__311479.cljs$lang$maxFixedArity = 0;
G__311479.cljs$lang$applyTo = (function (arglist__311481){
var args = cljs.core.seq(arglist__311481);
return G__311479__delegate(args);
});
G__311479.cljs$core$IFn$_invoke$arity$variadic = G__311479__delegate;
return G__311479;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__311482__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__311482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__311483__i = 0, G__311483__a = new Array(arguments.length -  0);
while (G__311483__i < G__311483__a.length) {G__311483__a[G__311483__i] = arguments[G__311483__i + 0]; ++G__311483__i;}
  args = new cljs.core.IndexedSeq(G__311483__a,0);
} 
return G__311482__delegate.call(this,args);};
G__311482.cljs$lang$maxFixedArity = 0;
G__311482.cljs$lang$applyTo = (function (arglist__311484){
var args = cljs.core.seq(arglist__311484);
return G__311482__delegate(args);
});
G__311482.cljs$core$IFn$_invoke$arity$variadic = G__311482__delegate;
return G__311482;
})()
;

return null;
});
