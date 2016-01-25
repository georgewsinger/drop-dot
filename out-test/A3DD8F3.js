goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31490__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31491__i = 0, G__31491__a = new Array(arguments.length -  0);
while (G__31491__i < G__31491__a.length) {G__31491__a[G__31491__i] = arguments[G__31491__i + 0]; ++G__31491__i;}
  args = new cljs.core.IndexedSeq(G__31491__a,0);
} 
return G__31490__delegate.call(this,args);};
G__31490.cljs$lang$maxFixedArity = 0;
G__31490.cljs$lang$applyTo = (function (arglist__31492){
var args = cljs.core.seq(arglist__31492);
return G__31490__delegate(args);
});
G__31490.cljs$core$IFn$_invoke$arity$variadic = G__31490__delegate;
return G__31490;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31493__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31494__i = 0, G__31494__a = new Array(arguments.length -  0);
while (G__31494__i < G__31494__a.length) {G__31494__a[G__31494__i] = arguments[G__31494__i + 0]; ++G__31494__i;}
  args = new cljs.core.IndexedSeq(G__31494__a,0);
} 
return G__31493__delegate.call(this,args);};
G__31493.cljs$lang$maxFixedArity = 0;
G__31493.cljs$lang$applyTo = (function (arglist__31495){
var args = cljs.core.seq(arglist__31495);
return G__31493__delegate(args);
});
G__31493.cljs$core$IFn$_invoke$arity$variadic = G__31493__delegate;
return G__31493;
})()
;

return null;
});
