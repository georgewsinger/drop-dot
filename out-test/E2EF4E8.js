goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48733__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48734__i = 0, G__48734__a = new Array(arguments.length -  0);
while (G__48734__i < G__48734__a.length) {G__48734__a[G__48734__i] = arguments[G__48734__i + 0]; ++G__48734__i;}
  args = new cljs.core.IndexedSeq(G__48734__a,0);
} 
return G__48733__delegate.call(this,args);};
G__48733.cljs$lang$maxFixedArity = 0;
G__48733.cljs$lang$applyTo = (function (arglist__48735){
var args = cljs.core.seq(arglist__48735);
return G__48733__delegate(args);
});
G__48733.cljs$core$IFn$_invoke$arity$variadic = G__48733__delegate;
return G__48733;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48736__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48737__i = 0, G__48737__a = new Array(arguments.length -  0);
while (G__48737__i < G__48737__a.length) {G__48737__a[G__48737__i] = arguments[G__48737__i + 0]; ++G__48737__i;}
  args = new cljs.core.IndexedSeq(G__48737__a,0);
} 
return G__48736__delegate.call(this,args);};
G__48736.cljs$lang$maxFixedArity = 0;
G__48736.cljs$lang$applyTo = (function (arglist__48738){
var args = cljs.core.seq(arglist__48738);
return G__48736__delegate(args);
});
G__48736.cljs$core$IFn$_invoke$arity$variadic = G__48736__delegate;
return G__48736;
})()
;

return null;
});
