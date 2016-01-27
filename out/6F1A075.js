goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32881__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32882__i = 0, G__32882__a = new Array(arguments.length -  0);
while (G__32882__i < G__32882__a.length) {G__32882__a[G__32882__i] = arguments[G__32882__i + 0]; ++G__32882__i;}
  args = new cljs.core.IndexedSeq(G__32882__a,0);
} 
return G__32881__delegate.call(this,args);};
G__32881.cljs$lang$maxFixedArity = 0;
G__32881.cljs$lang$applyTo = (function (arglist__32883){
var args = cljs.core.seq(arglist__32883);
return G__32881__delegate(args);
});
G__32881.cljs$core$IFn$_invoke$arity$variadic = G__32881__delegate;
return G__32881;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32884__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32885__i = 0, G__32885__a = new Array(arguments.length -  0);
while (G__32885__i < G__32885__a.length) {G__32885__a[G__32885__i] = arguments[G__32885__i + 0]; ++G__32885__i;}
  args = new cljs.core.IndexedSeq(G__32885__a,0);
} 
return G__32884__delegate.call(this,args);};
G__32884.cljs$lang$maxFixedArity = 0;
G__32884.cljs$lang$applyTo = (function (arglist__32886){
var args = cljs.core.seq(arglist__32886);
return G__32884__delegate(args);
});
G__32884.cljs$core$IFn$_invoke$arity$variadic = G__32884__delegate;
return G__32884;
})()
;

return null;
});
