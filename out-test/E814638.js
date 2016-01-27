goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__72887__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__72887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72888__i = 0, G__72888__a = new Array(arguments.length -  0);
while (G__72888__i < G__72888__a.length) {G__72888__a[G__72888__i] = arguments[G__72888__i + 0]; ++G__72888__i;}
  args = new cljs.core.IndexedSeq(G__72888__a,0);
} 
return G__72887__delegate.call(this,args);};
G__72887.cljs$lang$maxFixedArity = 0;
G__72887.cljs$lang$applyTo = (function (arglist__72889){
var args = cljs.core.seq(arglist__72889);
return G__72887__delegate(args);
});
G__72887.cljs$core$IFn$_invoke$arity$variadic = G__72887__delegate;
return G__72887;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__72890__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__72890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72891__i = 0, G__72891__a = new Array(arguments.length -  0);
while (G__72891__i < G__72891__a.length) {G__72891__a[G__72891__i] = arguments[G__72891__i + 0]; ++G__72891__i;}
  args = new cljs.core.IndexedSeq(G__72891__a,0);
} 
return G__72890__delegate.call(this,args);};
G__72890.cljs$lang$maxFixedArity = 0;
G__72890.cljs$lang$applyTo = (function (arglist__72892){
var args = cljs.core.seq(arglist__72892);
return G__72890__delegate(args);
});
G__72890.cljs$core$IFn$_invoke$arity$variadic = G__72890__delegate;
return G__72890;
})()
;

return null;
});
