goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__251188__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__251188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__251189__i = 0, G__251189__a = new Array(arguments.length -  0);
while (G__251189__i < G__251189__a.length) {G__251189__a[G__251189__i] = arguments[G__251189__i + 0]; ++G__251189__i;}
  args = new cljs.core.IndexedSeq(G__251189__a,0);
} 
return G__251188__delegate.call(this,args);};
G__251188.cljs$lang$maxFixedArity = 0;
G__251188.cljs$lang$applyTo = (function (arglist__251190){
var args = cljs.core.seq(arglist__251190);
return G__251188__delegate(args);
});
G__251188.cljs$core$IFn$_invoke$arity$variadic = G__251188__delegate;
return G__251188;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__251191__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__251191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__251192__i = 0, G__251192__a = new Array(arguments.length -  0);
while (G__251192__i < G__251192__a.length) {G__251192__a[G__251192__i] = arguments[G__251192__i + 0]; ++G__251192__i;}
  args = new cljs.core.IndexedSeq(G__251192__a,0);
} 
return G__251191__delegate.call(this,args);};
G__251191.cljs$lang$maxFixedArity = 0;
G__251191.cljs$lang$applyTo = (function (arglist__251193){
var args = cljs.core.seq(arglist__251193);
return G__251191__delegate(args);
});
G__251191.cljs$core$IFn$_invoke$arity$variadic = G__251191__delegate;
return G__251191;
})()
;

return null;
});
