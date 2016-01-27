goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__313123__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__313123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313124__i = 0, G__313124__a = new Array(arguments.length -  0);
while (G__313124__i < G__313124__a.length) {G__313124__a[G__313124__i] = arguments[G__313124__i + 0]; ++G__313124__i;}
  args = new cljs.core.IndexedSeq(G__313124__a,0);
} 
return G__313123__delegate.call(this,args);};
G__313123.cljs$lang$maxFixedArity = 0;
G__313123.cljs$lang$applyTo = (function (arglist__313125){
var args = cljs.core.seq(arglist__313125);
return G__313123__delegate(args);
});
G__313123.cljs$core$IFn$_invoke$arity$variadic = G__313123__delegate;
return G__313123;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__313126__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__313126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313127__i = 0, G__313127__a = new Array(arguments.length -  0);
while (G__313127__i < G__313127__a.length) {G__313127__a[G__313127__i] = arguments[G__313127__i + 0]; ++G__313127__i;}
  args = new cljs.core.IndexedSeq(G__313127__a,0);
} 
return G__313126__delegate.call(this,args);};
G__313126.cljs$lang$maxFixedArity = 0;
G__313126.cljs$lang$applyTo = (function (arglist__313128){
var args = cljs.core.seq(arglist__313128);
return G__313126__delegate(args);
});
G__313126.cljs$core$IFn$_invoke$arity$variadic = G__313126__delegate;
return G__313126;
})()
;

return null;
});
