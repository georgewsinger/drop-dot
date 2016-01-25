goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__73966__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__73966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73967__i = 0, G__73967__a = new Array(arguments.length -  0);
while (G__73967__i < G__73967__a.length) {G__73967__a[G__73967__i] = arguments[G__73967__i + 0]; ++G__73967__i;}
  args = new cljs.core.IndexedSeq(G__73967__a,0);
} 
return G__73966__delegate.call(this,args);};
G__73966.cljs$lang$maxFixedArity = 0;
G__73966.cljs$lang$applyTo = (function (arglist__73968){
var args = cljs.core.seq(arglist__73968);
return G__73966__delegate(args);
});
G__73966.cljs$core$IFn$_invoke$arity$variadic = G__73966__delegate;
return G__73966;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__73969__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__73969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73970__i = 0, G__73970__a = new Array(arguments.length -  0);
while (G__73970__i < G__73970__a.length) {G__73970__a[G__73970__i] = arguments[G__73970__i + 0]; ++G__73970__i;}
  args = new cljs.core.IndexedSeq(G__73970__a,0);
} 
return G__73969__delegate.call(this,args);};
G__73969.cljs$lang$maxFixedArity = 0;
G__73969.cljs$lang$applyTo = (function (arglist__73971){
var args = cljs.core.seq(arglist__73971);
return G__73969__delegate(args);
});
G__73969.cljs$core$IFn$_invoke$arity$variadic = G__73969__delegate;
return G__73969;
})()
;

return null;
});
