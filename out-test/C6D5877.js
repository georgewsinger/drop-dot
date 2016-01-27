goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23923__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23924__i = 0, G__23924__a = new Array(arguments.length -  0);
while (G__23924__i < G__23924__a.length) {G__23924__a[G__23924__i] = arguments[G__23924__i + 0]; ++G__23924__i;}
  args = new cljs.core.IndexedSeq(G__23924__a,0);
} 
return G__23923__delegate.call(this,args);};
G__23923.cljs$lang$maxFixedArity = 0;
G__23923.cljs$lang$applyTo = (function (arglist__23925){
var args = cljs.core.seq(arglist__23925);
return G__23923__delegate(args);
});
G__23923.cljs$core$IFn$_invoke$arity$variadic = G__23923__delegate;
return G__23923;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23926__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23927__i = 0, G__23927__a = new Array(arguments.length -  0);
while (G__23927__i < G__23927__a.length) {G__23927__a[G__23927__i] = arguments[G__23927__i + 0]; ++G__23927__i;}
  args = new cljs.core.IndexedSeq(G__23927__a,0);
} 
return G__23926__delegate.call(this,args);};
G__23926.cljs$lang$maxFixedArity = 0;
G__23926.cljs$lang$applyTo = (function (arglist__23928){
var args = cljs.core.seq(arglist__23928);
return G__23926__delegate(args);
});
G__23926.cljs$core$IFn$_invoke$arity$variadic = G__23926__delegate;
return G__23926;
})()
;

return null;
});
